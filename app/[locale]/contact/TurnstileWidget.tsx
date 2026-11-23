"use client";

import { useEffect, useRef } from "react";

interface TurnstileApi {
  render(container: HTMLElement, options: {
    sitekey: string;
    appearance: "interaction-only";
    size: "compact";
    "response-field": false;
    callback: (token: string) => void;
    "expired-callback": () => void;
    "error-callback": () => void;
    "timeout-callback": () => void;
  }): string;
  remove(widgetId: string): void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
    onAresTurnstileLoad?: () => void;
  }
}

let scriptReady: Promise<TurnstileApi> | undefined;

function loadTurnstile() {
  if (scriptReady) return scriptReady;

  scriptReady = new Promise<TurnstileApi>((resolve, reject) => {
    const script = document.createElement("script");
    const fail = () => {
      window.clearTimeout(timeout);
      delete window.onAresTurnstileLoad;
      script.remove();
      reject(new Error("Turnstile could not load"));
    };
    const timeout = window.setTimeout(fail, 15000);

    window.onAresTurnstileLoad = () => {
      const api = window.turnstile;
      if (!api) {
        fail();
        return;
      }

      window.clearTimeout(timeout);
      delete window.onAresTurnstileLoad;
      resolve(api);
    };
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onAresTurnstileLoad";
    script.async = true;
    script.onerror = fail;
    document.head.append(script);
  }).catch((error: unknown) => {
    scriptReady = undefined;
    throw error;
  });

  return scriptReady;
}

export default function TurnstileWidget({
  siteKey,
  onTokenChange,
  onError,
}: {
  siteKey: string;
  onTokenChange: (token: string | null) => void;
  onError: (failed: boolean) => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let active = true;
    let removeWidget: (() => void) | undefined;
    const fail = () => {
      if (!active) return;
      onTokenChange(null);
      onError(true);
    };

    void loadTurnstile().then((api) => {
      if (!active) return;

      const widgetId = api.render(container, {
        sitekey: siteKey,
        appearance: "interaction-only",
        size: "compact",
        "response-field": false,
        callback(token) {
          if (!active) return;
          onError(false);
          onTokenChange(token);
        },
        "expired-callback": () => {
          if (active) onTokenChange(null);
        },
        "error-callback": fail,
        "timeout-callback": fail,
      });

      removeWidget = () => api.remove(widgetId);
    }).catch(fail);

    return () => {
      active = false;
      removeWidget?.();
    };
  }, [siteKey, onTokenChange, onError]);

  return <div ref={containerRef} />;
}
