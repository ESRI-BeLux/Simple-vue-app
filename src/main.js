import { createApp } from "vue";
import App from "./App.vue";

import "./assets/main.css";
import { MapComponent } from "./esm-lib/index";
console.log("MapComponent", MapComponent);

const app = document.getElementById("app");

console.log("app", app);

if (app) {
    const token =
        "yte8eVoSBrsnSl46zWa3il9n8v9XMSRc6pbVw48BBYAc5na9PIyhdkUlNYF2Dlo_i4R1ailTsQAXGgI35LypxuwzS282iZZ9_FvqI6nuFU5UKPDxHoXnZ8IYUQ96kNNbaGHxqz71dtSeuRtEIbBeOxgbtmrHLnG1yuXj5f_-t5NO9Ixlor2bzRHCMZ-mI8s2";
    const test = new MapComponent(
        [
            {
                url: "https://services-eu1.arcgis.com/kkoySFboPZ70Z0Od/arcgis/rest/services/Grid_Map/FeatureServer/0",
                token: token,
            },
            {
                url: "https://services-eu1.arcgis.com/kkoySFboPZ70Z0Od/arcgis/rest/services/Grid_Map/FeatureServer/1",
                token: token,
            },
        ],
        app,
        "gray-vector",

        {
            xmin: 1237457.7355,
            ymin: -255015.750799999,
            xmax: 7327515.4867,
            ymax: 5287355.8792,
            wkid: 3034,
        }
    );

    test.launch();
}

//createApp(App).mount("#app");
