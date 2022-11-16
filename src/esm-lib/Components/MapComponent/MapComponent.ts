import "./index.css";
import Expand from "@arcgis/core/widgets/Expand";
import FeatureLayer from "@arcgis/core/layers/FeatureLayer";
import Legend from "@arcgis/core/widgets/Legend";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";

import SpatialReference from "@arcgis/core/geometry/SpatialReference";
import esriConfig from "@arcgis/core/config";
//import { edgeUniqueValueInfo, nodeUniqueValueInfo } from "./UniqueValueInfos";
import Extent from "@arcgis/core/geometry/Extent";

import UniqueValueRenderer from "@arcgis/core/renderers/UniqueValueRenderer";

type Bbox = {
    xmin: number;
    ymin: number;
    xmax: number;
    ymax: number;
    wkid: number;
};

type LayerObject = {
    url: string;
    token: string;
};

export class MapComponent {
    container: HTMLDivElement | string;
    basemap: string;
    bbox: Bbox;
    layers: LayerObject[];
    view: MapView = new MapView();

    constructor(
        layers: LayerObject[],
        container: HTMLDivElement | string = "container",
        basemap: string = "gray-vector",
        bbox: Bbox = {
            xmin: 1237457.7355,
            ymin: -255015.750799999,
            xmax: 7327515.4867,
            ymax: 5287355.8792,
            wkid: 3034,
        }
    ) {
        this.container = container;
        this.basemap = basemap;
        this.bbox = bbox;
        this.layers = layers;
    }

    launch() {
        this.createMap();
        this.addLayers();
    }

    createMap() {
        const map = new Map({
            basemap: this.basemap,
        });

        this.view = new MapView({
            container: this.container,
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
            },
            constraints: {
                maxScale: 35000,
            },
        });

        if (this.bbox) {
            this.zoomBbox(this.bbox);
        }

        this.view.when().then(() => {
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
        });
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
        if (this.layers && this.layers.length) {
            this.layers.forEach((layer) => {
                const lyr = new FeatureLayer({
                    url: `${layer.url}?${layer.token}`,
                });

                /* if (layer.url.endsWith("1")) {
                    lyr.renderer = new UniqueValueRenderer({
                        field: "Symbol",
                        uniqueValueInfos: edgeUniqueValueInfo,
                    });
                } else {
                    lyr.renderer = new UniqueValueRenderer({
                        field: "Symbol",
                        uniqueValueInfos: nodeUniqueValueInfo,
                    });
                } */

                if (layer.token) {
                    esriConfig?.request?.interceptors?.push({
                        // set the `urls` property to the URL of the FeatureLayer so that this
                        // interceptor only applies to requests made to the FeatureLayer URL
                        urls: lyr.url,
                        // use the BeforeInterceptorCallback to add token to query
                        before: (params) => {
                            params.requestOptions.query =
                                params.requestOptions.query || {};
                            params.requestOptions.query.token = layer.token;
                        },
                    });
                }

                this.view.map.add(lyr);
            });
        }
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
}
