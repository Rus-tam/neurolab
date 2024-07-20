import { createSlice } from "@reduxjs/toolkit";

const lowTempDistSlice = createSlice({
  name: "lowTempDist",
  initialState: {
    gas_feed_temperature: -5.0,
    gas_feed_pressure: 4000.0,
    gas_feed_mass_flow: 1000.0,
    gas_feed_ch4_mass_frac: 0.679,
    gas_feed_c2h6_mass_frac: 0.1189,
    gas_feed_c3h8_mass_frac: 0.0669,
    gas_feed_ic4h10_mass_frac: 0.109,
    gas_feed_nc4h10_mass_frac: 0.0083,
    gas_feed_ic5h12_mass_frac: 0.009,
    gas_feed_nc5h12_mass_frac: 0.0085,
    Comp_Fraction: 0.02,
    "3_pressure_kPa": 2072,
    gas_feed_Methane_mass_flow_kg_h: 6980,
    gas_feed_Ethane_mass_flow_kg_h: 3090,
    gas_feed_Propane_mass_flow_kg_h: 4550,
    "gas_feed_i-Butane_mass_flow_kg_h": 5632.5,
    "gas_feed_n-Butane_mass_flow_kg_h": 4550,
    "gas_feed_i-Pentane_mass_flow_kg_h": 140,
    "gas_feed_n-Pentane_mass_flow_kg_h": 57.5,
    gas_feed_Methane_molar_flow_kgmole_h: 435.162,
    gas_feed_Ethane_molar_flow_kgmole_h: 103,
    gas_feed_Propane_molar_flow_kgmole_h: 103.409,
    "gas_feed_i-Butane_molar_flow_kgmole_h": 96.912,
    "gas_feed_n-Butane_molar_flow_kgmole_h": 78.286,
    "gas_feed_i-Pentane_molar_flow_kgmole_h": 1.94,
    "gas_feed_n-Pentane_molar_flow_kgmole_h": 0.797,
    gas_feed_molar_flow_kgmole_h: 819.506,
    gas_feed_molecular_weight: 30.506,
    gas_feed_Mass_density_kg_m3: 124.004,
    gas_feed_vapour_fraction: 0.459,
    gas_feed_vapour_molar_flow_kgmole_h: 376.544,
    gas_feed_liquid_molar_flow_kgmole_h: 442.962,
    "1_Methane_molar_flow_kgmole_h": 318.829,
    "1_Ethane_molar_flow_kgmole_h": 37.824,
    "1_Propane_molar_flow_kgmole_h": 17.375,
    "1_i-Butane_molar_flow_kgmole_h": 6.088,
    "1_n-Butane_molar_flow_kgmole_h": 3.221,
    "1_i-Pentane_molar_flow_kgmole_h": 0,
    "1_n-Pentane_molar_flow_kgmole_h": 0,
    "1_Methane_mass_flow_kg_h": 5114.022,
    "1_Ethane_mass_flow_kg_h": 1134.715,
    "1_Propane_mass_flow_kg_h": 764.512,
    "1_i-Butane_mass_flow_kg_h": 353.821,
    "1_n-Butane_mass_flow_kg_h": 187.211,
    "1_i-Pentane_mass_flow_kg_h": 0,
    "1_n-Pentane_mass_flow_kg_h": 0,
    "2_Methane_molar_flow_kgmole_h": 116.333,
    "2_Ethane_molar_flow_kgmole_h": 65.176,
    "2_Propane_molar_flow_kgmole_h": 86.034,
    "2_i-Butane_molar_flow_kgmole_h": 90.824,
    "2_n-Butane_molar_flow_kgmole_h": 75.065,
    "2_i-Pentane_molar_flow_kgmole_h": 1.94,
    "2_n-Pentane_molar_flow_kgmole_h": 0.797,
    "2_Methane_mass_flow_kg_h": 1865.978,
    "2_Ethane_mass_flow_kg_h": 1955.285,
    "2_Propane_mass_flow_kg_h": 3785.488,
    "2_i-Butane_mass_flow_kg_h": 5278.679,
    "2_n-Butane_mass_flow_kg_h": 4362.789,
    "2_i-Pentane_mass_flow_kg_h": 140,
    "2_n-Pentane_mass_flow_kg_h": 57.5,
    "1_mass_flow_kg_h": 7554.281,
    "1_molar_flow_kgmole_h": 383.337,
    "2_mass_flow_kg_h": 17445.719,
    "2_molar_flow_kgmole_h": 436.169,
    "3_temperature_C": -33.682,
    "Q-100": 88.322,
    "16_Methane_molar_flow_kgmole_h": 444.021,
    "16_Ethane_molar_flow_kgmole_h": 93.591,
    "16_Propane_molar_flow_kgmole_h": 28.765,
    "16_i-Butane_molar_flow_kgmole_h": 9.08,
    "16_n-Butane_molar_flow_kgmole_h": 4.67,
    "16_i-Pentane_molar_flow_kgmole_h": 0.132,
    "16_n-Pentane_molar_flow_kgmole_h": 0.106,
    "16_Methane_mass_flow_kg_h": 7122.092,
    "16_Ethane_mass_flow_kg_h": 2807.74,
    "16_Propane_mass_flow_kg_h": 1265.67,
    "16_i-Butane_mass_flow_kg_h": 527.742,
    "16_n-Butane_mass_flow_kg_h": 271.428,
    "16_i-Pentane_mass_flow_kg_h": 9.506,
    "16_n-Pentane_mass_flow_kg_h": 7.661,
    "17_Methane_molar_flow_kgmole_h": -8.859,
    "17_Ethane_molar_flow_kgmole_h": 9.409,
    "17_Propane_molar_flow_kgmole_h": 74.644,
    "17_i-Butane_molar_flow_kgmole_h": 87.831,
    "17_n-Butane_molar_flow_kgmole_h": 73.616,
    "17_i-Pentane_molar_flow_kgmole_h": 1.809,
    "17_n-Pentane_molar_flow_kgmole_h": 0.691,
    "17_Methane_mass_flow_kg_h": -142.092,
    "17_Ethane_mass_flow_kg_h": 282.26,
    "17_Propane_mass_flow_kg_h": 3284.33,
    "17_i-Butane_mass_flow_kg_h": 5104.758,
    "17_n-Butane_mass_flow_kg_h": 4278.572,
    "17_i-Pentane_mass_flow_kg_h": 130.494,
    "17_n-Pentane_mass_flow_kg_h": 49.839,
    "16_mass_flow_kg_h": 12011.84,
    "16_molar_flow_kgmole_h": 580.366,
    "17_mass_flow_kg_h": 12988.16,
    "17_molar_flow_kgmole_h": 239.141,
    "16_temperature_C": -8.087,
    "17_temperature_C": 104.241,
    lowTempDistModalStatus: false,
  },

  reducers: {
    setProp: (state, action) => {
      state.feed_gas_temperature = action.payload.feed_gas_temperature;
      state.feed_gas_mass_flow = action.payload.feed_gas_mass_flow;
      state.feed_gas_pressure = action.payload.feed_gas_pressure;
      state.cooled_gas_pressure = action.payload.cooled_gas_pressure;
      state.column_power = action.payload.column_power;
    },
    setGasComp: (state, action) => {
      state.feed_gas_ch4 = action.payload.feed_gas_ch4;
      state.feed_gas_c2h6 = action.payload.feed_gas_c2h6;
      state.feed_gas_c3h8 = action.payload.feed_gas_c3h8;
      state.feed_gas_ic4h10 = action.payload.feed_gas_ic4h10;
      state.feed_gas_nc4h10 = action.payload.feed_gas_nc4h10;
      state.feed_gas_ic5h12 = action.payload.feed_gas_ic5h12;
      state.feed_gas_nc5h12 = action.payload.feed_gas_nc5h12;
    },
    setModalWindowStatus: (state, action) => {
      state.lowTempDistModalStatus = action.payload.lowTempDistModalStatus;
    },
    setLowTempDistResults: (state, action) => {
      state.sep_vap_mass_flow = action.payload.sep_vap_mass_flow;
      state.sep_liq_mass_flow = action.payload.sep_liq_mass_flow;
      state.sep_vap_ch4 = action.payload.sep_vap_ch4;
      state.sep_vap_c2h6 = action.payload.sep_vap_c2h6;
      state.sep_vap_c3h8 = action.payload.sep_vap_c3h8;
      state.sep_vap_ic4h10 = action.payload.sep_vap_ic4h10;
      state.sep_vap_nc4h10 = action.payload.sep_vap_nc4h10;
      state.sep_vap_ic5h12 = action.payload.sep_vap_ic5h12;
      state.sep_vap_nc5h12 = action.payload.sep_vap_nc5h12;
      state.sep_liq_ch4 = action.payload.sep_vap_ch4;
      state.sep_liq_c2h6 = action.payload.sep_liq_c2h6;
      state.sep_liq_c3h8 = action.payload.sep_liq_c3h8;
      state.sep_liq_ic4h10 = action.payload.sep_liq_ic4h10;
      state.sep_liq_nc4h10 = action.payload.sep_liq_nc4h10;
      state.sep_liq_ic5h12 = action.payload.sep_liq_ic5h12;
      state.sep_liq_nc5h12 = action.payload.sep_liq_nc5h12;
      state.cooled_gas_temperature = action.payload.cooled_gas_temperature;
      state.expander_power = action.payload.expander_power;
      state.column_bot_prod_temp = action.payload.column_bot_prod_temperature;
      state.column_top_prod_temp = action.payload.column_top_prod_temperature;
      state.column_top_prod_mass_flow = action.payload.column_top_prod_mass_flow;
      state.column_bot_prod_mass_flow = action.payload.column_bot_prod_mass_flow;
      state.col_top_ch4 = action.payload.col_top_ch4;
      state.col_top_c2h6 = action.payload.col_top_c2h6;
      state.col_top_c3h8 = action.payload.col_top_c3h8;
      state.col_top_ic4h10 = action.payload.col_top_ic4h10;
      state.col_top_nc4h10 = action.payload.col_top_nc4h10;
      state.col_top_ic5h12 = action.payload.col_top_ic5h12;
      state.col_top_nc5h12 = action.payload.col_top_nc5h12;
      state.col_bot_ch4 = action.payload.col_bot_ch4;
      state.col_bot_c2h6 = action.payload.col_bot_c2h6;
      state.col_bot_c3h8 = action.payload.col_bot_c3h8;
      state.col_bot_ic4h10 = action.payload.col_bot_ic4h10;
      state.col_bot_nc4h10 = action.payload.col_bot_nc4h10;
      state.col_bot_ic5h12 = action.payload.col_bot_ic5h12;
      state.col_bot_nc5h12 = action.payload.col_bot_nc5h12;
    },
  },
});

export const { setProp, setGasComp, setModalWindowStatus, setLowTempDistResults } = lowTempDistSlice.actions;

export const lowTempDistReducer = lowTempDistSlice.reducer;
