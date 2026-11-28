type Point = readonly [number, number, number];

type View = {
  id: "overview" | "traction" | "arm" | "navigation";
  target: Point;
  azimuth: number;
  elevation: number;
  distance: number;
  pin?: Point;
};

// Camera targets and callout pins use the coordinates of the display model.
export const aresXViews: readonly View[] = [
  {
    id: "overview",
    target: [0, -0.13, 0],
    azimuth: 48,
    elevation: 19,
    distance: 4.75,
  },
  {
    id: "traction",
    target: [0.63, -0.47, 0.55],
    azimuth: 73,
    elevation: 8,
    distance: 2.75,
    pin: [0.93, -0.81, 0.65],
  },
  {
    id: "arm",
    target: [0.42, 0.47, -0.03],
    azimuth: 140,
    elevation: 10,
    distance: 2.85,
    pin: [0.78, 0.77, -0.12],
  },
  {
    id: "navigation",
    target: [0.02, -0.1, -0.04],
    azimuth: 206,
    elevation: 34,
    distance: 3.85,
    pin: [-0.24, -0.16, -0.09],
  },
];
