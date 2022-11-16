
import UniqueValueInfo from "@arcgis/core/renderers/support/UniqueValueInfo";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";

import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";
export const edgeUniqueValueInfo: UniqueValueInfo[] = [
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [0, 0, 0, 255], width: 2 }),
        value: "Connection line, under construction",
        label: "Connection line, under construction",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [0, 0, 0, 255], width: 2 }),
        value: "Connection line",
        label: "Connection line",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [178, 178, 178, 255], width: 2 }),
        value: "132-150 kV Transmission Line Under Construction, 1 Circuit, underground",
        label: "132-150 kV Transmission Line Under Construction, 1 Circuit, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [0, 0, 0, 255], width: 0.4 }),
        value: "132-150 kV Transmission Line Under Construction, 1 Circuit",
        label: "132-150 kV Transmission Line Under Construction, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [0, 0, 0, 255], width: 0.4 }),
        value: "132-150 kV Transmission Line Under Construction, 2 Circuits",
        label: "132-150 kV Transmission Line Under Construction, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [0, 0, 0, 255], width: 0.4 }),
        value: "132-150 kV Transmission Line, 1 Circuit",
        label: "132-150 kV Transmission Line, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [178, 178, 178, 255], width: 2 }),
        value: "132-150 kV Transmission Line, 1 Circuit, underground",
        label: "132-150 kV Transmission Line, 1 Circuit, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [0, 0, 0, 255], width: 0.4 }),
        value: "132-150 kV Transmission Line, 2 Circuits",
        label: "132-150 kV Transmission Line, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [178, 178, 178, 255], width: 2 }),
        value: "132-150 kV Transmission Line, 2 Circuits, underground",
        label: "132-150 kV Transmission Line, 2 Circuits, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [56, 168, 0, 255], width: 0.6 }),
        value: "220 kV Transmission Line Under Construction, 1 Circuit",
        label: "220 kV Transmission Line Under Construction, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [178, 178, 178, 255], width: 2 }),
        value: "220 kV Transmission Line Under Construction, 1 Circuit, underground",
        label: "220 kV Transmission Line Under Construction, 1 Circuit, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [56, 168, 0, 255], width: 0.6 }),
        value: "220 kV Transmission Line Under Construction, 2 Circuits",
        label: "220 kV Transmission Line Under Construction, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [56, 168, 0, 255], width: 0.6 }),
        value: "220 kV Transmission Line, 1 Circuit",
        label: "220 kV Transmission Line, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [178, 178, 178, 255], width: 2 }),
        value: "220 kV Transmission Line, 1 Circuit, underground",
        label: "220 kV Transmission Line, 1 Circuit, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [56, 168, 0, 255], width: 0.6 }),
        value: "220 kV Transmission Line, 2 Circuits",
        label: "220 kV Transmission Line, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [178, 178, 178, 255], width: 2 }),
        value: "220 kV Transmission Line, 2 Circuits, underground",
        label: "220 kV Transmission Line, 2 Circuits, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [56, 168, 0, 255], width: 0.6 }),
        value: "220 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",
        label: "220 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [56, 168, 0, 255], width: 0.6 }),
        value: "220 kV Transmission Line, >= 3 Circuits",
        label: "220 kV Transmission Line, >= 3 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 166, 0, 255], width: 0.6 }),
        value: "300-330 kV Transmission Line Under Construction, 1 Circuit",
        label: "300-330 kV Transmission Line Under Construction, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 166, 0, 255], width: 0.6 }),
        value: "300-330 kV Transmission Line Under Construction, 2 Circuits",
        label: "300-330 kV Transmission Line Under Construction, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 166, 0, 255], width: 0.6 }),
        value: "300-330 kV Transmission Line, 1 Circuit",
        label: "300-330 kV Transmission Line, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [204, 204, 204, 255], width: 2 }),
        value: "300-330 kV Transmission Line, 1 Circuit, underground",
        label: "300-330 kV Transmission Line, 1 Circuit, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 166, 0, 255], width: 0.6 }),
        value: "300-330 kV Transmission Line, 2 Circuits",
        label: "300-330 kV Transmission Line, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [255, 170, 0, 255], width: 0.6 }),
        value: "300-330 kV Transmission Line, >= 3 Circuits",
        label: "300-330 kV Transmission Line, >= 3 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 0, 0, 255], width: 0.8 }),
        value: "380-400 kV Transmission Line Under Construction, 1 Circuit",
        label: "380-400 kV Transmission Line Under Construction, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 0, 0, 255], width: 0.8 }),
        value: "380-400 kV Transmission Line Under Construction, 2 Circuits",
        label: "380-400 kV Transmission Line Under Construction, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 0, 0, 255], width: 0.8 }),
        value: "380-400 kV Transmission Line Under Construction, >= 3 Circuits",
        label: "380-400 kV Transmission Line Under Construction, >= 3 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 0, 0, 255], width: 0.8 }),
        value: "380-400 kV Transmission Line, 1 Circuit",
        label: "380-400 kV Transmission Line, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 0, 0, 255], width: 0.8 }),
        value: "380-400 kV Transmission Line, 2 Circuits",
        label: "380-400 kV Transmission Line, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [178, 178, 178, 255], width: 2 }),
        value: "380-400 kV Transmission Line, 2 Circuits, underground",
        label: "380-400 kV Transmission Line, 2 Circuits, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 0, 0, 255], width: 0.8 }),
        value: "380-400 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",
        label: "380-400 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 0, 0, 255], width: 0.8 }),
        value: "380-400 kV Transmission Line Under Construction, 2 Circuits with 1 Circuit Mounted",
        label: "380-400 kV Transmission Line Under Construction, 2 Circuits with 1 Circuit Mounted",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 0, 0, 255], width: 0.8 }),
        value: "380-400 kV Transmission Line, >= 3 Circuits",
        label: "380-400 kV Transmission Line, >= 3 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [178, 178, 178, 255], width: 2 }),
        value: "380-400 kV Transmission Line, 1 Circuit, underground",
        label: "380-400 kV Transmission Line, 1 Circuit, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [184, 18, 69, 255], width: 1 }),
        value: "500 kV Transmission Line Under Construction, 1 Circuit",
        label: "500 kV Transmission Line Under Construction, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [184, 18, 69, 255], width: 1 }),
        value: "500 kV Transmission Line Under Construction, 2 Circuits",
        label: "500 kV Transmission Line Under Construction, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [184, 18, 69, 255], width: 1 }),
        value: "500 kV Transmission Line, 1 Circuit",
        label: "500 kV Transmission Line, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [184, 18, 69, 255], width: 1 }),
        value: "500 kV Transmission Line, 2 Circuits",
        label: "500 kV Transmission Line, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [0, 77, 168, 255], width: 1 }),
        value: "750 kV Transmission Line Under Construction, 1 Circuit",
        label: "750 kV Transmission Line Under Construction, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [0, 77, 168, 255], width: 1 }),
        value: "750 kV Transmission Line, 1 Circuit",
        label: "750 kV Transmission Line, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [0, 77, 168, 255], width: 1 }),
        value: "750 kV Transmission Line Under Construction, 1 Circuit, Under Construction",
        label: "750 kV Transmission Line Under Construction, 1 Circuit, Under Construction",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [238, 129, 238, 255], width: 0.8 }),
        value: "DC-Line Under Construction, 1 Circuit",
        label: "DC-Line Under Construction, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [255, 115, 223, 255], width: 0.8 }),
        value: "DC-Line Under Construction, 2 Circuits",
        label: "DC-Line Under Construction, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [238, 129, 238, 255], width: 0.8 }),
        value: "DC-Line, 1 Circuit",
        label: "DC-Line, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "dash", color: [238, 129, 238, 255], width: 0.8 }),
        value: "DC-Line, 2 Circuits",
        label: "DC-Line, 2 Circuits",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [204, 204, 204, 255], width: 2 }),
        value: "DC-Line, 2 Circuits, underground",
        label: "DC-Line, 2 Circuits, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [204, 204, 204, 255], width: 2 }),
        value: "DC-Line, 1 Circuit, underground",
        label: "DC-Line, 1 Circuit, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [0, 0, 0, 255], width: 0.4 }),
        value: "Interconnection for Voltage < 200 kV, 1 Circuit",
        label: "Interconnection for Voltage < 200 kV, 1 Circuit",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [204, 204, 204, 255], width: 2 }),
        value: "Interconnection for Voltage < 200 kV, 1 Circuit, underground",
        label: "Interconnection for Voltage < 200 kV, 1 Circuit, underground",

    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({ style: "solid", color: [0, 0, 0, 255], width: 0.4 }),
        value: "Interconnection for Voltage < 200 kV, 2 Circuits",
        label: "Interconnection for Voltage < 200 kV, 2 Circuits",

    }),
];

export const nodeUniqueValueInfo: UniqueValueInfo[] = [
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAACxJREFUKJFjYaAAsNBD838GBgZGUjT/R2K/o8RmYUo0YwU004wRQHSzmSAAAAUdAyoTLNhRAAAAAElFTkSuQmCC",
            width: 11,
            height: 7,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Phase shifter",
        label: "Phase shifter",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEVJREFUKJG9zrEJACEQBdEZsIPrv8Vr4RsIcol4i+AkGz3+Ng5qN3AAKzhJUAHe0nKSedWnhP+0xCqft2t4+DXc4W1HuAMPNw8teqrl/QAAAABJRU5ErkJggg==",

            width: 11,
            height: 7,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Phase shifter, under construction",
        label: "Phase shifter, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFdJREFUCJl9j7ENgDAQA++l79NnhowCc7BBMgPzwEypYQJTIECCEJf2ybKdUwt9jQ7EGQ2ttGBIIqUUvQdkdHsfcNp2ctDbfsCrBUJzpAO1YCuAmf2dqQeQKxZPdBaQrgAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Biogas",
        label: "Biogas",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGRJREFUCJl9zkENgDAQRNE/SVUgAAe4AA+4qIaighsCwAUH7gjAxnBoIClpmOPum+wGclb+MwSgsd1/N5MgIs7dtJ2aUKtLImFsv7MCToKFsQAFfM4kzOG5+mQArog2yDiq6q4bRiwakULOUDoAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Biogas, under construction",
        label: "Biogas, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFBJREFUCJl9j8ENgDAMA89SpuhMsA6dAdaBmbqGeVSVKgj4F+tykoOek/+sARTbiyR2nFIVlRiH3aFDuTKexWbI7C9wts8PATRJ19eKigDaDZ/UFKTSA11SAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Biomass",
        label: "Biomass",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGdJREFUCJl9z7sJgEAQRdH7YKrYAkw2tgttwTLWGrQd7cLUTSzANsZgERQ/Nxs4PBijNPFfazHG0OW16REDTvKnkhQMIDkknFEwilds1+ME0nP9Bs/cy7oktqVoyznvkuavL6paAPsBwpIdEA54v6kAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Biomass, under construction",
        label: "Biomass, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADpJREFUCJljYYCAzQz4gS8LAwOD1P///33wqWJkZJRiIWASHLAwMDAwrHJjJE4hsSY+C9/NsIWAumcAdUEJHEaVaQMAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Brown coal/Lignite",
        label: "Brown coal/Lignite",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAElJREFUCJljYYCAzQz4gS8LAwOD1P///33wqWJkZJRiYWBgYFjlxkjAQAYGFgYGBgan7v34VRk4QhSK6DsQZeIzRkbGLQTUPQMAdwAKjVEoon8AAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Brown coal/Lignite, under construction",
        label: "Brown coal/Lignite, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAD1JREFUCJljYYCAzQz4gS8LAwODVCfDfx98qsoZGKVYCJgEBywMDAwMZf/xKypnhCok1sRnjIyMWwioewYA3p4ICR06PdIAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Coal derived gas",
        label: "Coal derived gas",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEdJREFUCJljYYCAzQz4gS8LAwOD1P///33wqWJkZJRiYWBgYOhiJGAeAwMDCwMDA0PkfvyKyh2hCmUdiDPxGSMj4xYC6p4BABELCdSsMxLIAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Coal derived gas, under construction",
        label: "Coal derived gas, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAACxJREFUKJFjYaAyYBk1EAP8Z/j/H5nPyMDISJGBpIJhYCChMCPZQFLB4DcQAJohAzQ5DgEDAAAAAElFTkSuQmCC",

            width: 15,
            height: 9,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Converter Station",
        label: "Converter Station",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFtJREFUKJGtz8sNgDAMg+HfUu+MwCjsf2OFjsAE5oAoVUnF08con+IkXib9Bo0NwAjkYy6kLiwIUN4W95mxa5wi1EuNv/8opKurYdUWe7GZgPmMwqplYbhZ9WlWprsfGUGUnPUAAAAASUVORK5CYII=",

            width: 10,
            height: 7,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Converter Station Back-to-back",
        label: "Converter Station Back-to-back",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGJJREFUKJGtkMsNgDAMQ5+lrgJrsRrM1WHMgX5oJSp+viXyi5MEXir8BhobAwKcmgIhXYK2fa4LbHC0NVe4gKaDek2HJyd/v1FIw9TY3tkkSgk2sABrmTp+Tk4mW7Ybqz7VDtlnHs0FGvNQAAAAAElFTkSuQmCC",

            width: 10,
            height: 7,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Converter Station Back-to-back, under construction",
        label: "Converter Station Back-to-back, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEFJREFUKJFjYaAyYBk1EAP8Z/j/n+E/lMPIwMDIwMhIkYFww2BsvMYNSBgyMjAge5liAxkZGBmJMYhoA0kFg99AAIoBBzXjYjdpAAAAAElFTkSuQmCC",

            width: 15,
            height: 9,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Converter Station, under construction",
        label: "Converter Station, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADlJREFUCJljYYCAzQz4gS8LAwODFENDgw+y6P/6ehRVjIyMUiwETIID2ih8xtDQsAXFTQ0N6OqeAQD12wka1Y8aUwAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Fossil fuel",
        label: "Fossil fuel",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAD1JREFUCJljYYCAzQz4gS8LAwOD1P///31gIoyNjQz/6+tRVDEyMkqxEDAJDmij8BkjI+MWFDc1NKCrewYAHM0LHTQJ9DAAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Fossil fuel, under construction",
        label: "Fossil fuel, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADlJREFUCJljYYCAzQz4gS8LAwOD1P///33wqWJkZJRiIWASHLAwMDAw3NxIpEJiTXymEcC4hYC6ZwCmQwkcxnKYvQAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Fossil gas",
        label: "Fossil gas",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAENJREFUCJljYYCAzQz4gS8LAwOD1P///33wqWJkZJRiYWBgYLi5kYB5DAwMLAwMDAyyNkQq5BImTuEzRkbGLQTUPQMABpMJHKUNDcEAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Fossil gas, under construction",
        label: "Fossil gas, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADxJREFUCJljYYCAzQz4gS+Lp6en1LaQfz74VDEm75RiIWASHEAUJu3AryqZkYF4E7dv3/6MkZFxCwF1zwB8Sgu/NeBw9gAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Fossil oil",
        label: "Fossil oil",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEdJREFUCJljYYCAzQz4gS+Lp6en1LZt23zwqWJkZJRiYWBgYGDYVkrAQAYGiMIXl4lUmLQDv6pkRgaW7du3P2NkZNxCwMBnAB4kDaVX7qBqAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Fossil oil, under construction",
        label: "Fossil oil, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADpJREFUCJljYYCAzQz4gS8LAwOD1P///33wqWJkZJRiIWASHLAwMDAwMDY2EqeQWBOfMTQ0bCGg7hkAeQUJHPwUCYsAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Fossil peat",
        label: "Fossil peat",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE5JREFUCJljYYCAzQz4gS+Ltra21JUrV3zwqWJkZJRiYWBgYHBcuJCAgQwMLAwMDAwHHjwgTuH/+nq8ihgbGhhYrl69+oyRkXELAQOfAQAavBCcyYxJUAAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Fossil peat, under construction",
        label: "Fossil peat, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFVJREFUCJljYYCAzQz4gS8LAwOD1P///32wyTIyMjL8n+vOwJi8U4oFn4L/c93hYhgKE6ylUBRgKISZsiBZD6sjWRgYGJ4xMjJuYWBgYGBM3onLM88A1/cUse/R80oAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Geothermal",
        label: "Geothermal",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGhJREFUCJl9jrEJgDAURN+HTJHOEZwiKXQHIXMluIM2GcBacAG7rPEtRCEYvPLuHXeGWwv/Gg1gVXX4RMkjIaPnjnS9Na26iKDRoaqvV4PJM8WjAmrwmYmOeSvNkwYoEvIKICFDkBZXLhk5H317G2xjAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Geothermal, under construction",
        label: "Geothermal, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADhJREFUCJljYYCAzQz4gS+Ltra21JUrV3zwqWJkZJRiIWASHLBAdRCnkCgTr169+oyBgWELAXXPAEViCZvd8TEdAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hard coal",
        label: "Hard coal",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEhJREFUCJmNzEERwCAMBdH9M1GBhVhpPRFNrZRgARtw6D10z2/W+Hqou83dW2ZelZLUDKD3fhiCAUTEP7jWKpEkbIwxJb2H4dzGCQ+esUqt3gAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hard coal, under construction",
        label: "Hard coal, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFRJREFUCJljYYCAzQz4gS8LAwOD1P///32wyTIyMjKwN/1n+FnHKMWCTwF703+4GIZCRtUAFAUYCuGmxG3A6kgWBgaGZ4yMjFsYGBgYftYx4vLMMwAbyhNF11lT4AAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro marine",
        label: "Hydro marine",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGlJREFUCJljYYCAzQz4gS8LAwOD1P///33QZTiaGRh+1jEynL7xn8FUg1GKBZt2RkZGBvam/wz///+Hi6Eo5GhmYGBYl4CiAEUhzBr2pv8MP84vwOpIFgYGhmc/6xi3MDBAFDPWYVX3DAB7fR6YJlD4zAAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro marine, under construction",
        label: "Hydro marine, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADRJREFUCJljYYCAzQz4gS8LAwOD1P///32QRTmaUVX9rGOUYiFgEhzQRuEzRkbGLQTUPQMAOM4JHE4jaDwAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro mixed pump storage",
        label: "Hydro mixed pump storage",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUCJljYYCAzQz4gS8LAwOD1P///31gIhzNDAw/alFVMTIySrEQMAkOaKPwGSMj4xYUN9VhqHsGAFu4CZvhnSjJAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro mixed pump storage, under construction",
        label: "Hydro mixed pump storage, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADxJREFUCJljYYCAzQz4gS+Ltra21JUrV3zwqWJkZJRiIWASHLAwMDAwcDQTqZAoE69evfqMoY5xCwF1zwCU7gqiTZvL0AAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro pure pump storage",
        label: "Hydro pure pump storage",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEtJREFUCJljYYCAzQz4gS+Ltra21JUrV3zwqWJkZJRiYWBgYPBZRMA8BgYGFgYGBoY9D4lU+KMWvyLGOgYGlqtXrz5jZGTcQsDAZwAawA4a25BBlAAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro pure pump storage, under construction",
        label: "Hydro pure pump storage, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFZJREFUCJljYYCAzQz4gS8LAwODFHvTfx9ssj/rGBn+///PwMjIKMWCVf+OfIYfRycyMNT+hwthKISZgg5YMBTUYiqCKXz2s45xCwMDAwMjIyMuzzwDAPhRGutkZ2xnAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro pure storage",
        label: "Hydro pure storage",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE9JREFUCJltjrENgEAMAy9SCrZIFmINmIKKKWANGI7OFC8Kolzj4mTLzmCm53LgkLRUY2YAp1cx7SMlYWZ4Fc/2L/g3J6k94cAaEXdmtidfgGAQyDlQC5oAAAAASUVORK5CYII=",

            width: 6,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro pure storage under construction",
        label: "Hydro pure storage under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGlJREFUCJljYYCAzQz4gS8LAwOD1P///33QZTiaGRh+1jEynL7xn8FUg1GKBZt2RkZGBvam/wz///+Hi6Eo5GhmYGBYl4CiAEUhzBr2pv8MP84vwOpIFgYGhmc/6xi3MDBAFDPWYVX3DAB7fR6YJlD4zAAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro pure storage, under construction",
        label: "Hydro pure storage, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFdJREFUCJljYYCAzQz4gS+Ltra21JUrV3wYGRkZ2Jv+Y1X1s45RigXG+f8fooijGbuRLOgCP2oZGLCZjqEQ2XRkDSxXr159xsjIuAWXL37WMTIwMDA8AwCwvhkjsDF4+QAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro run of river & pondage",
        label: "Hydro run of river & pondage",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAGpJREFUCJljYYCAzQz4gS+Ltra21J3wKz4/6xgZ2Jv+M/yoxVTFyMgoxcLAwACRrP3PwNHMwMDRzIBVMQsyB6aAkRHTdBSFMPD/P8R0RkZGhtM3/kMUXr169RkjI+MWXL4w1WBkYGBgeAYAig8eF6I/8n4AAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Hydro run of river & pondage, under construction",
        label: "Hydro run of river & pondage, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADdJREFUCJljYYCAzQz4gS8LAwODFAMDgw+y6P///1FUMTIySrEQMAkOaKPwGQMDwxY0N6GrewYAsQAHHCjSNzwAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Mixed fuels",
        label: "Mixed fuels",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUCJljYYCAzQz4gS8LAwOD1P///31gIoyMjAz///9HUcXIyCjFQsAkOKCNwmeMjIxb0NyEru4ZAAZyCh8YkECKAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Mixed fuels, under construction",
        label: "Mixed fuels, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADlJREFUCJljYYCAzQz4gS+Lp6en1LZt23zwqWJkZJRiIWASHEAUOjMSqZAYE7dv3/6MkYFhCwF1zwBW7AmDyn8hLgAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Nuclear",
        label: "Nuclear",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEdJREFUCJljYYCAzQz4gS+Lp6en1LZt23zwqWJkZJRiYWBgYGAociRgIAMDROHFA0Qq3PsfvypGRgaW7du3P2NkZNxCwMBnAOATDUMHKyjbAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Nuclear, under construction",
        label: "Nuclear, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADpJREFUCJljYYCAzQz4gS+Lp6en1LZt23zwqWJkZJRiIWASHEAUzvMgUiExJm7fvv0Z43aGLQTUPQMAubQK3IiZu0wAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Oil shale",
        label: "Oil shale",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEdJREFUCJljYYCAzQz4gS+Lp6en1LZt23zwqWJkZJRiYWBgYGDYVkrAQAYGiMIXl4lUmLQDv6pkRgaW7du3P2NkZNxCwMBnAB4kDaVX7qBqAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Oil shale, under construction",
        label: "Oil shale, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAD5JREFUCJljYYCAzQz4gS+Ltra21JUrV3zwqWJkZJRiIWASHLAwMDAwTJ8+nTiFRJl49erVZ1lZWVsIqHsGAD6VDJtVR5TQAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Other fossil fuels",
        label: "Other fossil fuels",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEtJREFUCJmNzDERwCAQBdH9M6cCC1hJhBz2EhdceVhAB0V6yNZv1vh62HdbrbVk5rVTkooB9N4PQzCAiPgH3X2LWmvYGGNKeg/DuQBoVxDZUZ6/FwAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Other fossil fuels, under construction",
        label: "Other fossil fuels, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADlJREFUCJljYYCAzQz4gS8LAwOD1LRp03yQRTMzM1FUMTIySrEQMAkOaKPwWVZW1hZkwaysLHR1zwAQCgmV+kIi9wAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Other or not listed",
        label: "Other or not listed",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAD5JREFUCJljYYCAzQz4gS8LAwOD1P///31gItOnT2fIzMxEUcXIyCjFQsAkOKCNwmeMjIxbkAWzsrLQ1T0DACTbC1r+gsvJAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Other or not listed, under construction",
        label: "Other or not listed, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADVJREFUCJljYYCAzQz4gS8LAwOD1P//DD6o4v9ReIyMjFIsBEyCA9oofMbIyLAFVZgRXd0zANEABxwoiG3FAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Solar",
        label: "Solar",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE5JREFUCJljYYCAzQz4gS+Ltra21JUrV3wYGRkZ/v/HroqRkUGKBcb5D1fFiFUxC6bQfwZspmNRiDAdWQPL1atXnzEyMm7B5QtGiEueAQDQOBaZH0UjwgAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Solar photovoltaic",
        label: "Solar photovoltaic",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFpJREFUCJl9z8EJgDAMheH/QaboCj27hU6rW3htVuga8dB40KKBQAJfHsQYtfNfm9VaS2u+ShABEJOSVGyMkUjZM7bnGnfClP6CySMA5cE5oLt3ScfXF9IC0C+hpBqZN8c8RwAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Solar photovoltaic, under construction",
        label: "Solar photovoltaic, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE5JREFUCJl9z8ENgDAMQ9FvKVN0JpiBjtYdYKauYQ4V5RCoj8lzpAQjJ+vsARSb7WsrgW0klVgB+50lWOuB3VJ5wudKy2bCLnENrL9n+g1hABYXl/rMegAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Solar thermic",
        label: "Solar thermic",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFNJREFUCJl9jVENgDAUA6/JVMwHLsDDpM0DuMDHbJSPl5GwLdxne00Twck/RwKy7X3uhAT2jbTltJpLwgbbbzaIopSvMIj9BmqdpS42iSsuY7SgPR33FxpfNBdMAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Solar thermic, under construction",
        label: "Solar thermic, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADlJREFUCJljYYCAzQz4gS8LAwOD1P///30QYowMDAz/UVQxMjJKsRAwCQ5oo/AZIyPjFlRhRnR1zwCXJQgdaOWjIwAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Solar, under construction",
        label: "Solar, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADdJREFUCJljYYCAzQz4gS8LAwODVPWj8z7Ioi2yBiiqGBkZpVgImAQHtFH4rFXOcAuyYCumumcA+zsIcqEogfAAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Waste",
        label: "Waste",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAD5JREFUCJljYYCAzQz4gS+Ltra21JUrV3zwqWJkZJRiIWASHLAwMDAw1Dy+QJxCoky8evXqs6tyhlsIqHsGAGvJDOtvsvVvAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Waste (non renewable)",
        label: "Waste (non renewable)",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAE5JREFUCJljYYCAzQz4gS+Ltra21JUrV3zwqWJkZJRiYWBgYJj76i4BAxkYWBgYGBju//xMnMIWWQO8iloZGBhYrl69+oyRkXELAQOfAQBahRAg3XsOqAAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Waste (non renewable), under construction",
        label: "Waste (non renewable), under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFVJREFUCJljYYCAzQz4gS8LAwOD1P///32wyTIyMjJUPzrP0CpnKMWCT0H1o/NwMQyFGmF+KAowFMJMCeltwupIFgYGhmeMjIxbGBgYGFrlDHF55hkAYPcV1YQE2KkAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Waste (renewable)",
        label: "Waste (renewable)",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAG1JREFUCJljYYCAzQz4gS8LAwOD1P///33QZWoeX2BolTNkuP7lHYMmj5AUCzbtjIyMDNWPzjP8//8fLoaisObxBYY1xXUoClAUwqypfnSe4caqTVgdycLAwPCsVc5wCwMDA0OrnCFDK3bPPAMAvCAinhA/JQYAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Waste (renewable), under construction",
        label: "Waste (renewable), under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADxJREFUCJljYYCAzQz4gS8LAwOD1P///31gIjWPLzC0yBqgqGJkZJRiIWASHNBG4TNGRsYtyIKtmOqeAQAZTQqhuiF2vgAAAABJRU5ErkJggg==",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Waste, under construction",
        label: "Waste, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAEpJREFUCJl9ztEJwCAQg+E/cFM4U93B0bpDO5NrxAfBUjzM4+XjSDDzcE4NoNi+slYSGBAljsDfbYNq+oENri93PjKALumdOkdAH5ZXDSF1KiXcAAAAAElFTkSuQmCC",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Wind farm",
        label: "Wind farm",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAGCAYAAAD68A/GAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFVJREFUCJl9jUENgDAQBGeTqqiPugAPSMMDuKiP2lgepSRHCfPcm91LdA7+WROQbS/vixAIqitFJaevuiQw2H6yIArBFoUgjjcYvM/SEBvivCd7aaZdPpUVGzCk8TkAAAAASUVORK5CYII=",

            width: 7,
            height: 4,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Wind farm, under construction",
        label: "Wind farm, under construction",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAA4AAAAKCAYAAACE2W/HAAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAFtJREFUKJGdkUEKwEAIA0fwaXm2f7OHVrDFssvmGJyI0TmUD14CRAQAksq3PzBruKt5+YRYB0doCpGUgPkndRceb9ySw13A7tYqqzaapOWdUzkFw8E7XgMNGHUBSOUl9jGTR/UAAAAASUVORK5CYII=",

            width: 10,
            height: 7,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Substations + Power Plants",
        label: "Substations + Power Plants",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAB9JREFUKJFjYaAAsAxKzf+R2Ix0tXngNGP1J11sJggAxmwBKiLdfmgAAAAASUVORK5CYII=",

            width: 11,
            height: 7,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Substation",
        label: "Substation",
    }),
    new UniqueValueInfo({
        symbol: new PictureMarkerSymbol({

            url:
                "data:image/png;base64," +
                "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAKCAYAAABrGwT5AAAAAXNSR0IB2cksfwAAAAlwSFlzAAAOxAAADsQBlSsOGwAAADtJREFUKJHNzbENACAMA0G/xP4rmwbREStKg5tUl18abH2JbVuAJNHCtu89D1rluCcGymoqU8GE40Z4A9CGDS3feZ+mAAAAAElFTkSuQmCC",

            width: 11,
            height: 7,
            angle: 0,
            xoffset: 0,
            yoffset: 0,
        }),
        value: "Substation, under construction",
        label: "Substation, under construction",
    }),
];
