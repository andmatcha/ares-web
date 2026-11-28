"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useCallback, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

import Paragraph from "@/components/objects/atoms/Paragraph";

import { aresXViews } from "./ares-x-views";

import styles from "./AresXShowcase.module.css";

const AresXCanvas = dynamic(() => import("./AresXCanvas"), { ssr: false });

type Props = {
  description: string;
};

export default function AresXShowcase({ description }: Props) {
  const t = useTranslations("rover.aresX");
  const [viewer, setViewer] = useState<"loading" | "ready" | "unavailable">("loading");
  const [activeView, setActiveView] = useState(0);
  const [titlePinned, setTitlePinned] = useState(false);
  const { ref: observe, inView } = useInView({
    rootMargin: "320px 0px",
    triggerOnce: true,
    fallbackInView: true,
  });
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const captionPinRef = useRef<HTMLSpanElement>(null);
  const calloutRef = useRef<SVGGElement>(null);

  const attachTrack = useCallback((element: HTMLDivElement | null) => {
    trackRef.current = element;
    observe(element);
  }, [observe]);
  const onReady = useCallback(() => setViewer("ready"), []);
  const onUnavailable = useCallback(() => setViewer("unavailable"), []);
  const onPin = useCallback((x: number, y: number, opacity: number) => {
    const callout = calloutRef.current;
    const stage = stageRef.current;
    const captionPin = captionPinRef.current;
    if (!callout || !stage || !captionPin) return;

    callout.style.opacity = String(opacity);
    if (!opacity) return;

    const stageBounds = stage.getBoundingClientRect();
    const captionBounds = captionPin.getBoundingClientRect();
    const endX = captionBounds.left - stageBounds.left - stage.clientLeft;
    const endY = captionBounds.top - stageBounds.top - stage.clientTop;
    const below = captionPin.offsetLeft > 0;
    const path = below
      ? `M ${x} ${y} L ${endX} ${endY - 22} V ${endY}`
      : `M ${x} ${y} L ${endX - 24} ${endY} H ${endX}`;
    callout.querySelector("path")?.setAttribute("d", path);
    callout.querySelector("circle")?.setAttribute("cx", String(x));
    callout.querySelector("circle")?.setAttribute("cy", String(y));
  }, []);

  const showCanvas = inView && viewer !== "unavailable";
  const ready = showCanvas && viewer === "ready";
  const view = aresXViews[ready ? activeView : 0].id;

  const goToView = (index: number) => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;
    const top = Number.parseFloat(getComputedStyle(stage).top);
    const distance = track.offsetHeight - stage.offsetHeight;
    window.scrollTo({
      top: window.scrollY + track.getBoundingClientRect().top - top
        + distance * (index / (aresXViews.length - 1)),
      behavior: "smooth",
    });
  };

  return (
    <section aria-labelledby="ares-x-title" className={styles.showcase}>
      <div className={styles.story} data-sticky-title={ready && titlePinned}>
        <h2 id="ares-x-title" className={styles.title}>
          ARES <span className="text-ares-red">X</span>
        </h2>
        <Image
          className={styles.introPhoto}
          src="/images/rovers/aresx.jpg"
          alt="ARES X"
          width={7008}
          height={4672}
          sizes="(min-width: 60rem) 58rem, calc(100vw - 2rem)"
        />
        <div
          ref={attachTrack}
          className={styles.track}
          data-animated={ready}
          hidden={viewer === "unavailable"}
        >
          <div ref={stageRef} className={styles.stage}>
            <div className={styles.viewport}>
              {showCanvas && !ready && (
                <span className={styles.loading} role="status">{t("loading")}</span>
              )}
              {showCanvas && (
                <div className={styles.canvas} aria-hidden="true">
                  <AresXCanvas
                    trackRef={trackRef}
                    stageRef={stageRef}
                    onReady={onReady}
                    onUnavailable={onUnavailable}
                    onViewChange={setActiveView}
                    onTitlePinned={setTitlePinned}
                    onPin={onPin}
                  />
                </div>
              )}
            </div>
            <div className={styles.caption}>
              <span ref={captionPinRef} className={styles.captionPin} aria-hidden="true" />
              <div className={styles.captionCopy} key={view}>
                <h3>{t(`${view}.title`)}</h3>
                <p>{t(`${view}.description`)}</p>
              </div>
              {ready && (
                <>
                  <div aria-label={t("views")} className={styles.views} role="group">
                    {aresXViews.map(({ id }, index) => (
                      <button
                        aria-label={t(`${id}.title`)}
                        aria-current={activeView === index ? "step" : undefined}
                        key={id}
                        onClick={() => goToView(index)}
                        type="button"
                      >
                        <span aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                  <p className={styles.scrollHint} aria-hidden={view !== "overview"}>
                    {view === "overview" ? t("scroll") : "\u00a0"}
                  </p>
                </>
              )}
            </div>
            {ready && (
              <svg className={styles.callout} aria-hidden="true">
                <g ref={calloutRef}>
                  <path />
                  <circle r="4" />
                </g>
              </svg>
            )}
          </div>
        </div>
      </div>
      <Paragraph className={styles.description}>{description}</Paragraph>
    </section>
  );
}
