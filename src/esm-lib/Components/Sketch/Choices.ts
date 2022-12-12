export type SketchChoice = "point" | "polyline";

export const EntsoeGeometryType: { [key: string]: SketchChoice } = {
    node: "point",
    edge: "polyline",
};
