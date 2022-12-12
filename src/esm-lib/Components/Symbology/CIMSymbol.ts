import CIMSymbol from "@arcgis/core/symbols/CIMSymbol";

import * as cimSymbols from "./cim-symbols/index";

export const JsonToCIMSymbolObject = (name: string) => {
    const formattedName = name.toLocaleLowerCase();

    const jsonObject = cimSymbols[formattedName as keyof typeof cimSymbols];

    if (jsonObject) {
        return new CIMSymbol({
            data: {
                type: "CIMSymbolReference",
                symbol: jsonObject as __esri.CIMPointSymbol,
            },
        });
    } else {
        console.log("Not found", formattedName, "-", name);
        return new CIMSymbol({
            data: {
                type: "CIMSymbolReference",
                symbol: cimSymbols.not_found as __esri.CIMPointSymbol,
            },
        });
    }
};

export const myCIMSymbol = new CIMSymbol({
    data: {
        type: "CIMSymbolReference",
        symbol: {
            type: "CIMPointSymbol",
            symbolLayers: [
                {
                    type: "CIMVectorMarker",
                    enable: true,
                    anchorPointUnits: "Relative",

                    size: 15.75,

                    frame: { xmin: 0, ymin: 0, xmax: 21, ymax: 21 },
                    markerGraphics: [
                        {
                            type: "CIMMarkerGraphic",
                            geometry: {
                                rings: [
                                    [
                                        [11.67, 14.51],
                                        [13, 13],
                                        [14.6, 13],
                                        [14.61, 13],
                                        [15.05, 12.82],
                                        [15.25, 12.38],
                                        [15.14, 11.99],
                                        [14.78, 11.74],
                                        [14.78, 4],
                                        [14, 4],
                                        [14, 11.7],
                                        [12.38, 11.7],
                                        [11.31, 12.81],
                                        [10.45, 10.39],
                                        [12.19, 8.42],
                                        [12.41, 8.14],
                                        [12.49, 7.85],
                                        [12.5, 4.13],
                                        [12.44, 3.84],
                                        [12.28, 3.6],
                                        [12.04, 3.44],
                                        [11.75, 3.38],
                                        [11.46, 3.44],
                                        [11.22, 3.6],
                                        [11.06, 3.84],
                                        [11, 4.13],
                                        [11, 7.66],
                                        [9.64, 9.02],
                                        [8.46, 6.61],
                                        [6.25, 3.94],
                                        [5.79, 3.6],
                                        [5.35, 3.63],
                                        [5, 3.91],
                                        [4.87, 4.33],
                                        [5.09, 4.87],
                                        [7.45, 7.88],
                                        [9.35, 13.84],
                                        [9.6, 14.38],
                                        [9.89, 14.8],
                                        [10.2, 15.06],
                                        [10.52, 15.14],
                                        [11.15, 14.98],
                                        [11.67, 14.51],
                                    ],
                                    [
                                        [7.04, 10.98],
                                        [5.8, 11.38],
                                        [5.51, 11.63],
                                        [5.48, 12],
                                        [6.69, 15.77],
                                        [6.94, 16.06],
                                        [7.32, 16.09],
                                        [8.55, 15.69],
                                        [8.84, 15.45],
                                        [8.88, 15.06],
                                        [7.66, 11.3],
                                        [7.41, 11.01],
                                        [7.04, 10.98],
                                    ],
                                    [
                                        [11.5, 15.15],
                                        [10.98, 15.25],
                                        [10.55, 15.55],
                                        [10.25, 15.98],
                                        [10.15, 16.5],
                                        [10.25, 17.02],
                                        [10.54, 17.46],
                                        [10.98, 17.75],
                                        [11.5, 17.85],
                                        [12.02, 17.75],
                                        [12.46, 17.46],
                                        [12.75, 17.02],
                                        [12.85, 16.5],
                                        [12.75, 15.98],
                                        [12.45, 15.55],
                                        [12.02, 15.25],
                                        [11.5, 15.15],
                                    ],
                                ],
                            },
                            symbol: {
                                type: "CIMPolygonSymbol",
                                symbolLayers: [
                                    {
                                        type: "CIMSolidStroke",
                                        enable: true,
                                        capStyle: "Round",
                                        joinStyle: "Round",

                                        miterLimit: 10,
                                        width: 0,
                                        color: [0, 0, 0, 255],
                                    },
                                    {
                                        type: "CIMSolidFill",
                                        enable: true,
                                        color: [113, 201, 110, 255],
                                    },
                                ],
                            },
                        },
                    ],
                    scaleSymbolsProportionally: true,
                    respectFrame: true,
                },
                {
                    type: "CIMVectorMarker",
                    enable: true,
                    colorLocked: true,
                    anchorPointUnits: "Relative",

                    size: 18.5,

                    frame: { xmin: -5, ymin: -5, xmax: 5, ymax: 5 },
                    markerGraphics: [
                        {
                            type: "CIMMarkerGraphic",
                            geometry: {
                                rings: [
                                    [
                                        [0, 5],
                                        [0.87, 4.92],
                                        [1.71, 4.7],
                                        [2.5, 4.33],
                                        [3.21, 3.83],
                                        [3.83, 3.21],
                                        [4.33, 2.5],
                                        [4.7, 1.71],
                                        [4.92, 0.87],
                                        [5, 0],
                                        [4.92, -0.87],
                                        [4.7, -1.71],
                                        [4.33, -2.5],
                                        [3.83, -3.21],
                                        [3.21, -3.83],
                                        [2.5, -4.33],
                                        [1.71, -4.7],
                                        [0.87, -4.92],
                                        [0, -5],
                                        [-0.87, -4.92],
                                        [-1.71, -4.7],
                                        [-2.5, -4.33],
                                        [-3.21, -3.83],
                                        [-3.83, -3.21],
                                        [-4.33, -2.5],
                                        [-4.7, -1.71],
                                        [-4.92, -0.87],
                                        [-5, 0],
                                        [-4.92, 0.87],
                                        [-4.7, 1.71],
                                        [-4.33, 2.5],
                                        [-3.83, 3.21],
                                        [-3.21, 3.83],
                                        [-2.5, 4.33],
                                        [-1.71, 4.7],
                                        [-0.87, 4.92],
                                        [0, 5],
                                    ],
                                ],
                            },
                            symbol: {
                                type: "CIMPolygonSymbol",
                                symbolLayers: [
                                    {
                                        type: "CIMSolidStroke",
                                        enable: true,
                                        capStyle: "Round",
                                        joinStyle: "Round",

                                        miterLimit: 10,
                                        width: 0.5,
                                        color: [167, 169, 172, 255],
                                    },
                                    {
                                        type: "CIMSolidFill",
                                        enable: true,
                                        color: [255, 255, 255, 255],
                                    },
                                ],
                            },
                        },
                    ],
                    scaleSymbolsProportionally: true,
                    respectFrame: true,
                },
            ],

            scaleX: 1,
            angleAlignment: "Display",
            //"version": "2.0.0",
            // "build": "8933"
        },
    },
});
