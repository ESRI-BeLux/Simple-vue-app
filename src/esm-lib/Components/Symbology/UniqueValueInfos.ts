import UniqueValueInfo from "@arcgis/core/renderers/support/UniqueValueInfo";
import PictureMarkerSymbol from "@arcgis/core/symbols/PictureMarkerSymbol";
import SimpleLineSymbol from "@arcgis/core/symbols/SimpleLineSymbol";

import { JsonToCIMSymbolObject } from "./CIMSymbol";

export const edgeUniqueValueInfo: UniqueValueInfo[] = [
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [0, 0, 0, 255],
            width: 2,
        }),
        value: "Connection line, under construction",
        label: "Connection line, under construction",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [0, 0, 0, 255],
            width: 2,
        }),
        value: "Connection line",
        label: "Connection line",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [178, 178, 178, 255],
            width: 2,
        }),
        value: "132-150 kV Transmission Line Under Construction, 1 Circuit, underground",
        label: "132-150 kV Transmission Line Under Construction, 1 Circuit, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [0, 0, 0, 255],
            width: 0.4,
        }),
        value: "132-150 kV Transmission Line Under Construction, 1 Circuit",
        label: "132-150 kV Transmission Line Under Construction, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [0, 0, 0, 255],
            width: 0.4,
        }),
        value: "132-150 kV Transmission Line Under Construction, 2 Circuits",
        label: "132-150 kV Transmission Line Under Construction, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [0, 0, 0, 255],
            width: 0.4,
        }),
        value: "132-150 kV Transmission Line, 1 Circuit",
        label: "132-150 kV Transmission Line, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [178, 178, 178, 255],
            width: 2,
        }),
        value: "132-150 kV Transmission Line, 1 Circuit, underground",
        label: "132-150 kV Transmission Line, 1 Circuit, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [0, 0, 0, 255],
            width: 0.4,
        }),
        value: "132-150 kV Transmission Line, 2 Circuits",
        label: "132-150 kV Transmission Line, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [178, 178, 178, 255],
            width: 2,
        }),
        value: "132-150 kV Transmission Line, 2 Circuits, underground",
        label: "132-150 kV Transmission Line, 2 Circuits, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [56, 168, 0, 255],
            width: 0.6,
        }),
        value: "220 kV Transmission Line Under Construction, 1 Circuit",
        label: "220 kV Transmission Line Under Construction, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [178, 178, 178, 255],
            width: 2,
        }),
        value: "220 kV Transmission Line Under Construction, 1 Circuit, underground",
        label: "220 kV Transmission Line Under Construction, 1 Circuit, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [56, 168, 0, 255],
            width: 0.6,
        }),
        value: "220 kV Transmission Line Under Construction, 2 Circuits",
        label: "220 kV Transmission Line Under Construction, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [56, 168, 0, 255],
            width: 0.6,
        }),
        value: "220 kV Transmission Line, 1 Circuit",
        label: "220 kV Transmission Line, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [178, 178, 178, 255],
            width: 2,
        }),
        value: "220 kV Transmission Line, 1 Circuit, underground",
        label: "220 kV Transmission Line, 1 Circuit, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [56, 168, 0, 255],
            width: 0.6,
        }),
        value: "220 kV Transmission Line, 2 Circuits",
        label: "220 kV Transmission Line, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [178, 178, 178, 255],
            width: 2,
        }),
        value: "220 kV Transmission Line, 2 Circuits, underground",
        label: "220 kV Transmission Line, 2 Circuits, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [56, 168, 0, 255],
            width: 0.6,
        }),
        value: "220 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",
        label: "220 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [56, 168, 0, 255],
            width: 0.6,
        }),
        value: "220 kV Transmission Line, >= 3 Circuits",
        label: "220 kV Transmission Line, >= 3 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 166, 0, 255],
            width: 0.6,
        }),
        value: "300-330 kV Transmission Line Under Construction, 1 Circuit",
        label: "300-330 kV Transmission Line Under Construction, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 166, 0, 255],
            width: 0.6,
        }),
        value: "300-330 kV Transmission Line Under Construction, 2 Circuits",
        label: "300-330 kV Transmission Line Under Construction, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 166, 0, 255],
            width: 0.6,
        }),
        value: "300-330 kV Transmission Line, 1 Circuit",
        label: "300-330 kV Transmission Line, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [204, 204, 204, 255],
            width: 2,
        }),
        value: "300-330 kV Transmission Line, 1 Circuit, underground",
        label: "300-330 kV Transmission Line, 1 Circuit, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 166, 0, 255],
            width: 0.6,
        }),
        value: "300-330 kV Transmission Line, 2 Circuits",
        label: "300-330 kV Transmission Line, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [255, 170, 0, 255],
            width: 0.6,
        }),
        value: "300-330 kV Transmission Line, >= 3 Circuits",
        label: "300-330 kV Transmission Line, >= 3 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 0, 0, 255],
            width: 0.8,
        }),
        value: "380-400 kV Transmission Line Under Construction, 1 Circuit",
        label: "380-400 kV Transmission Line Under Construction, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 0, 0, 255],
            width: 0.8,
        }),
        value: "380-400 kV Transmission Line Under Construction, 2 Circuits",
        label: "380-400 kV Transmission Line Under Construction, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 0, 0, 255],
            width: 0.8,
        }),
        value: "380-400 kV Transmission Line Under Construction, >= 3 Circuits",
        label: "380-400 kV Transmission Line Under Construction, >= 3 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 0, 0, 255],
            width: 0.8,
        }),
        value: "380-400 kV Transmission Line, 1 Circuit",
        label: "380-400 kV Transmission Line, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 0, 0, 255],
            width: 0.8,
        }),
        value: "380-400 kV Transmission Line, 2 Circuits",
        label: "380-400 kV Transmission Line, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [178, 178, 178, 255],
            width: 2,
        }),
        value: "380-400 kV Transmission Line, 2 Circuits, underground",
        label: "380-400 kV Transmission Line, 2 Circuits, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 0, 0, 255],
            width: 0.8,
        }),
        value: "380-400 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",
        label: "380-400 kV Transmission Line, 2 Circuits with 1 Circuit Mounted",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 0, 0, 255],
            width: 0.8,
        }),
        value: "380-400 kV Transmission Line Under Construction, 2 Circuits with 1 Circuit Mounted",
        label: "380-400 kV Transmission Line Under Construction, 2 Circuits with 1 Circuit Mounted",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 0, 0, 255],
            width: 0.8,
        }),
        value: "380-400 kV Transmission Line, >= 3 Circuits",
        label: "380-400 kV Transmission Line, >= 3 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [178, 178, 178, 255],
            width: 2,
        }),
        value: "380-400 kV Transmission Line, 1 Circuit, underground",
        label: "380-400 kV Transmission Line, 1 Circuit, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [184, 18, 69, 255],
            width: 1,
        }),
        value: "500 kV Transmission Line Under Construction, 1 Circuit",
        label: "500 kV Transmission Line Under Construction, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [184, 18, 69, 255],
            width: 1,
        }),
        value: "500 kV Transmission Line Under Construction, 2 Circuits",
        label: "500 kV Transmission Line Under Construction, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [184, 18, 69, 255],
            width: 1,
        }),
        value: "500 kV Transmission Line, 1 Circuit",
        label: "500 kV Transmission Line, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [184, 18, 69, 255],
            width: 1,
        }),
        value: "500 kV Transmission Line, 2 Circuits",
        label: "500 kV Transmission Line, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [0, 77, 168, 255],
            width: 1,
        }),
        value: "750 kV Transmission Line Under Construction, 1 Circuit",
        label: "750 kV Transmission Line Under Construction, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [0, 77, 168, 255],
            width: 1,
        }),
        value: "750 kV Transmission Line, 1 Circuit",
        label: "750 kV Transmission Line, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [0, 77, 168, 255],
            width: 1,
        }),
        value: "750 kV Transmission Line Under Construction, 1 Circuit, Under Construction",
        label: "750 kV Transmission Line Under Construction, 1 Circuit, Under Construction",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [238, 129, 238, 255],
            width: 0.8,
        }),
        value: "DC-Line Under Construction, 1 Circuit",
        label: "DC-Line Under Construction, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [255, 115, 223, 255],
            width: 0.8,
        }),
        value: "DC-Line Under Construction, 2 Circuits",
        label: "DC-Line Under Construction, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [238, 129, 238, 255],
            width: 0.8,
        }),
        value: "DC-Line, 1 Circuit",
        label: "DC-Line, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "dash",
            color: [238, 129, 238, 255],
            width: 0.8,
        }),
        value: "DC-Line, 2 Circuits",
        label: "DC-Line, 2 Circuits",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [204, 204, 204, 255],
            width: 2,
        }),
        value: "DC-Line, 2 Circuits, underground",
        label: "DC-Line, 2 Circuits, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [204, 204, 204, 255],
            width: 2,
        }),
        value: "DC-Line, 1 Circuit, underground",
        label: "DC-Line, 1 Circuit, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [0, 0, 0, 255],
            width: 0.4,
        }),
        value: "Interconnection for Voltage < 200 kV, 1 Circuit",
        label: "Interconnection for Voltage < 200 kV, 1 Circuit",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [204, 204, 204, 255],
            width: 2,
        }),
        value: "Interconnection for Voltage < 200 kV, 1 Circuit, underground",
        label: "Interconnection for Voltage < 200 kV, 1 Circuit, underground",
    }),
    new UniqueValueInfo({
        symbol: new SimpleLineSymbol({
            style: "solid",
            color: [0, 0, 0, 255],
            width: 0.4,
        }),
        value: "Interconnection for Voltage < 200 kV, 2 Circuits",
        label: "Interconnection for Voltage < 200 kV, 2 Circuits",
    }),
];

export const nodeUniqueValueInfo: UniqueValueInfo[] = [
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("biogas"),
        value: "Biogas",
        label: "Biogas",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("biogas_uo"),
        value: "Biogas, under construction",
        label: "Biogas, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("biomass"),
        value: "Biomass",
        label: "Biomass",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("biomass_uo"),
        value: "Biomass, under construction",
        label: "Biomass, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_brown_lignite"),
        value: "Brown coal/Lignite",
        label: "Brown coal/Lignite",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_brown_lignite_uo"),
        value: "Brown coal/Lignite, under construction",
        label: "Brown coal/Lignite, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_coal_gas"),
        value: "Coal derived gas",
        label: "Coal derived gas",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("converter_b2b"),
        value: "Converter Station Back-to-back",
        label: "Converter Station Back-to-back",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("converter_b2b_uo"),
        value: "Converter Station Back-to-back, under construction",
        label: "Converter Station Back-to-back, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("converter"),
        value: "Converter Station",
        label: "Converter Station",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("converter_uo"),
        value: "Converter Station, under construction",
        label: "Converter Station, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_fuel"),
        value: "Fossil fuel",
        label: "Fossil fuel",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_fuel_uo"),
        value: "Fossil fuel, under construction",
        label: "Fossil fuel, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_gas"),
        value: "Fossil gas",
        label: "Fossil gas",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_gas_uo"),
        value: "Fossil gas, under construction",
        label: "Fossil gas, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_oil"),
        value: "Fossil oil",
        label: "Fossil oil",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_oil_uo"),
        value: "Fossil oil, under construction",
        label: "Fossil oil, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_peat"),
        value: "Fossil peat",
        label: "Fossil peat",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("geothermal"),
        value: "Geothermal",
        label: "Geothermal",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("geothermal_uo"),
        value: "Geothermal, under construction",
        label: "Geothermal, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_coal_hard"),
        value: "Hard coal",
        label: "Hard coal",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_coal_hard_uo"),
        value: "Hard coal, under construction",
        label: "Hard coal, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("hydro_mixed"),
        value: "Hydro mixed pump storage",
        label: "Hydro mixed pump storage",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("hydro_mixed_uo"),
        value: "Hydro mixed pump storage, under construction",
        label: "Hydro mixed pump storage, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("hydro_pump_storage"),
        value: "Hydro pure pump storage",
        label: "Hydro pure pump storage",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("hydro_pure_storage"),
        value: "Hydro pure storage",
        label: "Hydro pure storage",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("hydro_pure_storage_uo"),
        value: "Hydro pure storage, under construction",
        label: "Hydro pure storage, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("hydro_ror"),
        value: "Hydro run of river & pondage",
        label: "Hydro run of river & pondage",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("hydro_ror_uo"),
        value: "Hydro run of river & pondage, under construction",
        label: "Hydro run of river & pondage, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_mixed"),
        value: "Mixed fuels",
        label: "Mixed fuels",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_mixed_uo"),
        value: "Mixed fuels, under construction",
        label: "Mixed fuels, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("nuclear"),
        value: "Nuclear",
        label: "Nuclear",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("nuclear_uo"),
        value: "Nuclear, under construction",
        label: "Nuclear, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_oil_shale"),
        value: "Oil shale",
        label: "Oil shale",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("fossil_other"),
        value: "Other fossil fuels",
        label: "Other fossil fuels",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("other_nl"),
        value: "Other or not listed",
        label: "Other or not listed",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("other_nl_uo"),
        value: "Other or not listed, under construction",
        label: "Other or not listed, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("phase_shifter"),
        value: "Phase shifter",
        label: "Phase shifter",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("phase_shifter_uo"),
        value: "Phase shifter, under construction",
        label: "Phase shifter, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("solar_pv"),
        value: "Solar photovoltaic",
        label: "Solar photovoltaic",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("solar_pv_uo"),
        value: "Solar photovoltaic, under construction",
        label: "Solar photovoltaic, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("solar_thermal"),
        value: "Solar thermic",
        label: "Solar thermic",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("solar"),
        value: "Solar",
        label: "Solar",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("substation"),
        value: "Substation",
        label: "Substation",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("power_plus_sub_uo"),
        value: "Substation, under construction",
        label: "Substation, under construction",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("power_plus_sub"),
        value: "Substations + Power Plants",
        label: "Substations + Power Plants",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("waste_renewable"),
        value: "Waste (renewable)",
        label: "Waste (renewable)",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("waste"),
        value: "Waste",
        label: "Waste",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("wind_farm"),
        value: "Wind farm",
        label: "Wind farm",
    }),
    new UniqueValueInfo({
        symbol: JsonToCIMSymbolObject("wind_farm_uo"),
        value: "Wind farm, under construction",
        label: "Wind farm, under construction",
    }),
];
