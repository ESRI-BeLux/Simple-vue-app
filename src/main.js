import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import { MapComponent } from "./esm-lib/index";
const appContainer = document.getElementById("app");

const asyncUpdate = async (graphic) => {
    return Promise.resolve("Has been updated");
};

const asyncAdd = async (graphic) => {
    console.log("graphic", graphic);
    console.log("graphic.layer", graphic.layer);

    return Promise.resolve("Has been added");
};

const onSelection = async (graphic) => {
    console.log("my selected graphic", graphic);

    return Promise.resolve("Graphic has been selected");
};

if (appContainer && appContainer instanceof HTMLDivElement) {
    const token =
        "LkDUVvMvlQ64lnDP1ltMMf5KtPmm_VU2K86BZ7oxtCdqqryM4Ojdiw3YZp_tzkECQ7H-MwrY63OZceBxw8ij2a3Rctpjz5Tc7zqh7UrqQi54RQbRDPqXEIsFtBy1nelVdLqh8AnYTX-Qc2Ky8hzMsaSzWAvHxlBMDa6cFO7O4rEcMFL4DL4ia8bh0or2-BX6";
    const mapComponent = new MapComponent({
        nodeLayer: {
            layerUrl:
                "https://services-eu1.arcgis.com/kkoySFboPZ70Z0Od/arcgis/rest/services/Grid_Map_Dev/FeatureServer/0",
            minScale: 2000000,
            //maxScale: 1000,
        },

        edgeLayer: {
            layerUrl:
                "https://services-eu1.arcgis.com/kkoySFboPZ70Z0Od/arcgis/rest/services/Grid_Map_Dev/FeatureServer/1",
            minScale: 30000000, //bit smaller than europre

            //minScale: 37000000,
            //maxScale: 1000,
        },
        token: token,
        container: appContainer,
        basemap: "gray-vector",
        bbox: {
            xmin: 1237457.7355,
            ymin: -255015.750799999,
            xmax: 7327515.4867,
            ymax: 5287355.8792,
            wkid: 3034,
        },
        updateCallback: asyncUpdate,
        addCallback: asyncAdd,
        selectCallBack: onSelection,
    });

    mapComponent.launch();

    //mapComponent.sketchWidget.createFeature(EntsoeGeometryType.edge);

    //mapComponent.refreshLayers();

    /*  mapComponent
        .getFeatureAsync(7520, mapComponent.nodeFeatureLayer)
        .then((featureSet) => {
            console.log("featureSet", featureSet);
            if (featureSet.features[0]) {
                mapComponent.selectFeature(featureSet.features[0]);
                if (mapComponent.selectedFeature)
                    mapComponent.sketchWidget.updateFeature(
                        mapComponent.selectedFeature
                    );
            }
        }); */
}
