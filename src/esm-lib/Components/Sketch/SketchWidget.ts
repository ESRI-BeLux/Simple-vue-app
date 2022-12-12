import Graphic from "@arcgis/core/Graphic";
import GraphicsLayer from "@arcgis/core/layers/GraphicsLayer";
import MapView from "@arcgis/core/views/MapView";
import SketchViewModel from "@arcgis/core/widgets/Sketch/SketchViewModel";
import { SketchChoice } from "./Choices";

interface SketchWidgetObject {
    view: MapView;

    updateCallback: (graphic: Graphic) => Promise<any>;
    addCallback: (graphic: Graphic) => Promise<any>;
}

export class SketchWidget {
    sketchWidgetObject: SketchWidgetObject;
    graphicsLayer = new GraphicsLayer();
    sketchWidget = new SketchViewModel();

    constructor(sketchWidgetObject: SketchWidgetObject) {
        this.sketchWidgetObject = sketchWidgetObject;

        this.init();
    }

    init() {
        const { view, updateCallback, addCallback } = this.sketchWidgetObject;
        const graphicsLayer = this.graphicsLayer;
        view.map.add(graphicsLayer);

        const sketchWidget = new SketchViewModel({
            view: view,
            layer: graphicsLayer,
        });

        this.sketchWidget = sketchWidget;
        this.sketchWidget.on("update", (event) => {
            // user is clicking on the view... call update method with the center and edge graphics
            if (event.state === "complete" && !event.aborted) {
                console.log("Complete or aborted");
                const promise = updateCallback(event.graphics[0]);

                promise.then((event) => {
                    console.log("FINISH", event);
                    graphicsLayer.removeAll();
                });
            }
        });

        this.sketchWidget.on("create", function (event) {
            if (event.state === "complete") {
                console.log("Create complete", event);
                const promise = addCallback(event.graphic);

                promise.then((event) => {
                    console.log("FINISH", event);
                    graphicsLayer.removeAll();
                });
            }
        });
    }

    updateFeature(graphic: Graphic) {
        //TODO remove this line (for the moment help to test)
        // @ts-ignore: Unreachable code error
        graphic["entsoeLayer"] = graphic.layer;

        this.graphicsLayer.graphics.add(graphic);
        this.sketchWidget.update(graphic);
    }

    createFeature(type: SketchChoice) {
        this.sketchWidget.create(type);
    }
}
