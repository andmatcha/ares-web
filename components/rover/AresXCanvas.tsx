"use client";

import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { MeshoptDecoder } from "meshoptimizer";
import { Component, type ReactNode, type RefObject, Suspense, useEffect, useMemo, useRef } from "react";
import { MathUtils, type PerspectiveCamera, Vector3 } from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

import { aresXViews } from "./ares-x-views";

type Props = {
  trackRef: RefObject<HTMLDivElement | null>;
  stageRef: RefObject<HTMLDivElement | null>;
  onReady: () => void;
  onUnavailable: () => void;
  onViewChange: (index: number) => void;
  onTitlePinned: (pinned: boolean) => void;
  onPin: (x: number, y: number, opacity: number) => void;
};

class ViewerBoundary extends Component<{
  children: ReactNode;
  onUnavailable: () => void;
}> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    this.props.onUnavailable();
  }

  render() {
    return this.state.failed ? null : this.props.children;
  }
}

function AnimatedRover({ trackRef, stageRef, onReady, onUnavailable, onViewChange, onTitlePinned, onPin }: Props) {
  const { scene } = useLoader(GLTFLoader, "/models/ares-x.glb", (loader) => {
    loader.setMeshoptDecoder(MeshoptDecoder);
  });
  const invalidate = useThree((state) => state.invalidate);
  const gl = useThree((state) => state.gl);
  const lastView = useRef(-1);
  const { lookAt, pin } = useMemo(() => ({ lookAt: new Vector3(), pin: new Vector3() }), []);

  useEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    let titlePinned = false;
    const renderVisible = () => {
      const rect = track.getBoundingClientRect();
      const inset = Number.parseFloat(getComputedStyle(stage).top);
      const shouldPin = rect.top <= inset;
      if (shouldPin !== titlePinned) {
        titlePinned = shouldPin;
        onTitlePinned(shouldPin);
      }
      if (rect.bottom > 0 && rect.top < window.innerHeight) invalidate();
    };
    const loseContext = (event: Event) => {
      event.preventDefault();
      onUnavailable();
    };
    const resize = new ResizeObserver(renderVisible);
    resize.observe(track);
    resize.observe(stage);
    window.addEventListener("scroll", renderVisible, { passive: true });
    gl.domElement.addEventListener("webglcontextlost", loseContext);
    onReady();
    return () => {
      resize.disconnect();
      window.removeEventListener("scroll", renderVisible);
      gl.domElement.removeEventListener("webglcontextlost", loseContext);
    };
  }, [gl, invalidate, onReady, onTitlePinned, onUnavailable, stageRef, trackRef]);

  useFrame(({ camera, size }) => {
    const track = trackRef.current;
    const stage = stageRef.current;
    if (!track || !stage) return;

    const scrollDistance = track.offsetHeight - stage.offsetHeight;
    const inset = Number.parseFloat(getComputedStyle(stage).top) || 0;
    const progress = scrollDistance > 0
      ? MathUtils.clamp((inset - track.getBoundingClientRect().top) / scrollDistance, 0, 1)
      : 0;
    const position = progress * (aresXViews.length - 1);
    const start = Math.floor(position);
    const end = Math.min(start + 1, aresXViews.length - 1);
    const blend = MathUtils.smoothstep(position - start, 0.22, 0.88);
    const view = blend < 0.5 ? start : end;
    const from = aresXViews[start];
    const to = aresXViews[end];
    const mix = (a: number, b: number) => MathUtils.lerp(a, b, blend);

    if (lastView.current !== view) {
      lastView.current = view;
      onViewChange(view);
    }

    const azimuth = MathUtils.degToRad(mix(from.azimuth, to.azimuth));
    const elevation = MathUtils.degToRad(mix(from.elevation, to.elevation));
    const { aspect } = camera as PerspectiveCamera;
    const distance = mix(from.distance, to.distance) * Math.max(1, 1.12 / aspect);
    const horizontal = distance * Math.cos(elevation);
    lookAt.set(
      mix(from.target[0], to.target[0]),
      mix(from.target[1], to.target[1]),
      mix(from.target[2], to.target[2])
    );
    camera.position.set(
      lookAt.x + horizontal * Math.sin(azimuth),
      lookAt.y + distance * Math.sin(elevation),
      lookAt.z + horizontal * Math.cos(azimuth)
    );
    camera.lookAt(lookAt);
    camera.updateMatrixWorld();

    const point = aresXViews[view].pin;
    const opacity = MathUtils.smoothstep(Math.abs(blend * 2 - 1), 0.45, 0.9);
    if (!point || opacity === 0) {
      onPin(0, 0, 0);
      return;
    }
    pin.set(...point).project(camera);
    const visible = Math.abs(pin.x) < 1 && Math.abs(pin.y) < 1 && Math.abs(pin.z) < 1;
    onPin((pin.x + 1) * size.width / 2, (1 - pin.y) * size.height / 2, visible ? opacity : 0);
  });

  return <primitive object={scene} />;
}

export default function AresXCanvas(props: Props) {
  return (
    <ViewerBoundary onUnavailable={props.onUnavailable}>
      <Canvas
        camera={{ fov: 39, near: 0.05, far: 25, position: [3, 1.5, 3] }}
        dpr={[1, 1.5]}
        frameloop="demand"
      >
        <hemisphereLight args={["#eef4ff", "#777481", 1.1]} />
        <directionalLight position={[3, 5, 4]} intensity={1.55} />
        <directionalLight position={[-4, 3, -3]} color="#c6dcff" intensity={0.9} />
        <Suspense fallback={null}>
          <AnimatedRover {...props} />
        </Suspense>
      </Canvas>
    </ViewerBoundary>
  );
}
