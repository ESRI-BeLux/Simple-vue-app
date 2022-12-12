import esriConfig from "@arcgis/core/config";
import Handles from "@arcgis/core/core/Handles";
import Extent from "@arcgis/core/geometry/Extent";
import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import Graphic from "@arcgis/core/Graphic";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Map from "@arcgis/core/Map";
import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";
import FeatureLayerView from "@arcgis/core/views/layers/FeatureLayerView";
import MapView from "@arcgis/core/views/MapView";
import Expand from "@arcgis/core/widgets/Expand";
import Legend from "@arcgis/core/widgets/Legend";
import { SketchWidget } from "../Sketch/SketchWidget";
import {
    edgeUniqueValueInfo,
    nodeUniqueValueInfo,
} from "../Symbology/UniqueValueInfos";

type Bbox = {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
    wkid: number;
};

type LayerObject = {
    layerUrl: string;
    minScale?: number;
    maxScale?: number;
};

interface MapComponentObject {
    container: HTMLDivElement | string;
    basemap?: string;
    bbox?: Bbox;
    //layers: LayerObject[];
    edgeLayer: LayerObject;
    nodeLayer: LayerObject;
    token: string;
    updateCallback: (graphic: Graphic) => Promise<any>;
    addCallback: (graphic: Graphic) => Promise<any>;
    selectCallBack: (graphic: Graphic) => any;
}

export class MapComponent {
    view: MapView = new MapView();
    mapComponentObject: MapComponentObject;
    highlightSelect: Handles;
    edgeFeatureLayer: FeatureLayer;
    nodeFeatureLayer: FeatureLayer;
    sketchWidget: SketchWidget;
    selectedFeature: Graphic | undefined;

    constructor(mapComponentObject: MapComponentObject) {
        this.mapComponentObject = mapComponentObject;
        this.highlightSelect = new Handles();
    }

    launch() {
        this.createMap();
        this.addLayers();
    }

    createMap() {
        const { basemap, container, bbox, updateCallback, addCallback } =
            this.mapComponentObject;

        const map = new Map({
            basemap: basemap,
        });

        this.view = new MapView({
            container: container,
            map: map,

            highlightOptions: {
                fillOpacity: 0,
                color: [50, 50, 50],
            },
            popup: {
                dockEnabled: true,
                dockOptions: {
                    position: "top-right",
                    breakpoint: false,
                },
                //autoOpenEnabled: false,
            },
            constraints: {
                maxScale: 35000,
            },
        });

        if (bbox) {
            this.zoomBbox(bbox);
        }

        // Event handler that fires each time an action is clicked.
        /* this.view.popup.on("trigger-action", (event) => {
            let feature = this.view.popup.selectedFeature;
            switch (event.action.id) {
                case "edit-action":
                    console.log("edit-action", feature);

                    break;
                default:
                    break;
            }
        }); */

        this.sketchWidget = new SketchWidget({
            view: this.view,
            updateCallback: updateCallback,
            addCallback: addCallback,
        });
        //this.view.ui.add(this.sketchWidget.getSketchWidget(), "top-right");

        this.view.when(() => {
            this.view.ui.add(
                [
                    new Expand({
                        view: this.view,
                        content: new Legend({ view: this.view }),
                        group: "top-left",
                        expanded: false,
                    }),
                ],
                "top-left"
            );

            /* this.view.watch("scale", (event) => {
                if (!event) return;

                console.log("Scale", event);
            }); */

            // Get the screen point from the view's click event
            this.view.on("click", (event) => {
                this.clearSelection();
                // Search for graphics at the clicked location. this.View events can be used
                // as screen locations as they expose an x,y coordinate that conforms
                // to the ScreenPoint definition.
                this.view.hitTest(event).then((response) => {
                    if (response.results?.length > 0) {
                        console.log("response.results", response.results);

                        // only get the graphics returned from myLayer
                        const nodeHit = response.results?.filter(
                            (hitResult) =>
                                hitResult.type === "graphic" &&
                                hitResult.graphic.layer ===
                                    this.nodeFeatureLayer
                        );

                        if (
                            nodeHit.length > 0 &&
                            nodeHit[0].type === "graphic"
                        ) {
                            this.selectFeature(nodeHit[0].graphic);

                            if (this.selectedFeature)
                                this.sketchWidget.updateFeature(
                                    this.selectedFeature
                                );
                        } else {
                            // only get the graphics returned from myLayer
                            const edgeHit = response.results?.filter(
                                (hitResult) =>
                                    hitResult.type === "graphic" &&
                                    hitResult.graphic.layer ===
                                        this.edgeFeatureLayer
                            );

                            if (
                                edgeHit.length > 0 &&
                                edgeHit[0].type === "graphic"
                            ) {
                                this.selectFeature(edgeHit[0].graphic);
                                if (this.selectedFeature)
                                    this.sketchWidget.updateFeature(
                                        this.selectedFeature
                                    );
                            }
                        }
                    }
                });
            });
        });
    }

    refreshLayers() {
        this.edgeFeatureLayer.refresh();
        this.nodeFeatureLayer.refresh();
    }

    zoom = (layer: FeatureLayer, ids: Array<number>) => {
        let query = layer.createQuery();
        query.objectIds = ids;
        query.returnGeometry = true;
        console.log("QUERY");
        layer.queryFeatures(query).then((response) => {
            console.log("BEFORE VIEW GOTO");
            this.view?.goTo(response.features).catch((error) => {
                if (error.name !== "AbortError") {
                    console.error(error);
                }
            });
        });
    };

    addLayers() {
        const { edgeLayer, nodeLayer, token } = this.mapComponentObject;

        this.edgeFeatureLayer = this.createFeatureLayer(edgeLayer, token);
        this.edgeFeatureLayer.renderer = new UniqueValueRenderer({
            field: "Symbol",
            uniqueValueInfos: edgeUniqueValueInfo,
        });

        this.nodeFeatureLayer = this.createFeatureLayer(nodeLayer, token);
        this.nodeFeatureLayer.renderer = new UniqueValueRenderer({
            field: "Symbol",
            uniqueValueInfos: nodeUniqueValueInfo,
            //symbol changed size when zoom in zoom out
            /* visualVariables: [
                new SizeVariable({
                    // resizable icons
                    valueExpression: "$view.scale",
                    stops: [
                        { size: 1.0, value: 591657527 },
                        { size: 1.25, value: 147914381.8 },
                        { size: 2.5, value: 36978595.44 },
                        { size: 5.0, value: 9244648.859 },
                        { size: 10.0, value: 2311162.215 },
                        { size: 20.0, value: 577790.5537 },
                        { size: 40.0, value: 144447.6384 },
                        { size: 80.0, value: 36111.90961 },
                        { size: 160.0, value: 9027.977402 },
                        { size: 320.0, value: 2256.99435 },
                    ],
                }),
            ], */
        });

        this.view.map.addMany([this.nodeFeatureLayer, this.edgeFeatureLayer]);
    }

    createFeatureLayer(layerObject: LayerObject, token: string): FeatureLayer {
        const lyr = new FeatureLayer({
            url: `${layerObject.layerUrl}`,
            outFields: ["*"],
        });

        if (layerObject.minScale) {
            lyr.minScale = layerObject.minScale;
        }

        if (layerObject.maxScale) {
            lyr.maxScale = layerObject.maxScale;
        }

        esriConfig?.request?.interceptors?.push({
            // set the `urls` property to the URL of the FeatureLayer so that this
            // interceptor only applies to requests made to the FeatureLayer URL
            urls: lyr.url,
            // use the BeforeInterceptorCallback to add token to query
            before: (params) => {
               /*  if (1670418589563 < Date.now()) {
                    console.log("TOKEN IS GOOD");
                } else {
                    console.log("TOKEN IS BAD");

                    //this.mapComponentObject.token = "1234";

                    this.refreshToken();
                }
                console.log("token", token);
                console.log("token", this.mapComponentObject.token); */

                params.requestOptions.query = params.requestOptions.query || {};
                params.requestOptions.query.token = this.mapComponentObject.token;
            },

            error: (error: __esri.Error) => {
                //console.log("error", error);

                if (error.details.httpStatus === 498) {
                    //pass the information 
                }
            },

            
        });

        this.view.whenLayerView(lyr).then((layerView) => {
            /* const popupTemplate = lyr.createPopupTemplate();
            lyr.popupTemplate = popupTemplate;
            lyr.popupTemplate.content = []; */
            /* let emergencyLinkExternalToAction = new ActionButton({
                title: "Edit",
                id: "edit-action",
                className: "esri-icon-link-external",
            });

            let actionsCollection = new Collection([
                emergencyLinkExternalToAction,
            ]);
            // actionsCollection.add(emergencyLinkExternalToAction);

            lyr.popupTemplate.actions = actionsCollection; */
        });

        return lyr;
    }

    refreshToken() {
        
    }

    zoomBbox = (bbox: Bbox) => {
        const extent = new Extent({
            xmin: bbox.xmin,
            ymin: bbox.ymin,
            xmax: bbox.xmax,
            ymax: bbox.ymax,
            spatialReference: new SpatialReference({ wkid: bbox.wkid }),
        });

        this.view.extent = extent;
    };

    getFeatureAsync(id: number, layer: FeatureLayer) {
        let query = layer.createQuery();
        query.objectIds = [id];
        query.returnGeometry = true;

        return this.view.whenLayerView(layer).then((layerView) => {
            return layerView.queryFeatures(query);
        });

        //layer.queryFeatures(query);
    }

    selectFeature = (graphic: Graphic) => {
        this.selectedFeature = graphic;
        const { selectCallBack } = this.mapComponentObject;

        selectCallBack(this.selectedFeature);
        if (graphic.layer instanceof FeatureLayer)
            this.view
                .whenLayerView(graphic.layer)
                .then((layerView: FeatureLayerView) => {
                    if (this.highlightSelect) {
                        this.highlightSelect.remove();
                    }

                    // use the objectID to highlight the feature
                    this.highlightSelect.add(layerView.highlight(graphic));
                });
    };

    clearSelection = () => {
        this.selectedFeature = undefined;
        if (this.highlightSelect) {
            this.highlightSelect.remove();
        }
    };
}
