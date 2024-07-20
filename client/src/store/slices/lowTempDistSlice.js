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
    stream_Comp_Fraction: 0.02,
    stream_3_pressure_kPa: 2072,
    gas_feed_Methane_mass_flow_kg_h: 0.0,
    gas_feed_Ethane_mass_flow_kg_h: 0.0,
    gas_feed_Propane_mass_flow_kg_h: 0.0,
    gas_feed_i_Butane_mass_flow_kg_h: 0.0,
    gas_feed_n_Butane_mass_flow_kg_h: 0.0,
    gas_feed_i_Pentane_mass_flow_kg_h: 0.0,
    gas_feed_n_Pentane_mass_flow_kg_h: 0.0,
    gas_feed_Methane_molar_flow_kgmole_h: 0.0,
    gas_feed_Ethane_molar_flow_kgmole_h: 0.0,
    gas_feed_Propane_molar_flow_kgmole_h: 0.0,
    gas_feed_i_Butane_molar_flow_kgmole_h: 0.0,
    gas_feed_n_Butane_molar_flow_kgmole_h: 0.0,
    gas_feed_i_Pentane_molar_flow_kgmole_h: 0.0,
    gas_feed_n_Pentane_molar_flow_kgmole_h: 0.0,
    gas_feed_molar_flow_kgmole_h: 0.0,
    gas_feed_molecular_weight: 0.0,
    gas_feed_Mass_density_kg_m3: 0.0,
    gas_feed_vapour_fraction: 0.0,
    gas_feed_vapour_molar_flow_kgmole_h: 0.0,
    gas_feed_liquid_molar_flow_kgmole_h: 0.0,
    stream_1_Methane_molar_flow_kgmole_h: 0.0,
    stream_1_Ethane_molar_flow_kgmole_h: 0.0,
    stream_1_Propane_molar_flow_kgmole_h: 0.0,
    stream_1_i_Butane_molar_flow_kgmole_h: 0.0,
    stream_1_n_Butane_molar_flow_kgmole_h: 0.0,
    stream_1_i_Pentane_molar_flow_kgmole_h: 0.0,
    stream_1_n_Pentane_molar_flow_kgmole_h: 0.0,
    stream_1_Methane_mass_flow_kg_h: 0.0,
    stream_1_Ethane_mass_flow_kg_h: 0.0,
    stream_1_Propane_mass_flow_kg_h: 0.0,
    stream_1_i_Butane_mass_flow_kg_h: 0.0,
    stream_1_n_Butane_mass_flow_kg_h: 0.0,
    stream_1_i_Pentane_mass_flow_kg_h: 0.0,
    stream_1_n_Pentane_mass_flow_kg_h: 0.0,
    stream_2_Methane_molar_flow_kgmole_h: 0.0,
    stream_2_Ethane_molar_flow_kgmole_h: 0.0,
    stream_2_Propane_molar_flow_kgmole_h: 0.0,
    stream_2_i_Butane_molar_flow_kgmole_h: 0.0,
    stream_2_n_Butane_molar_flow_kgmole_h: 0.0,
    stream_2_i_Pentane_molar_flow_kgmole_h: 0.0,
    stream_2_n_Pentane_molar_flow_kgmole_h: 0.0,
    stream_2_Methane_mass_flow_kg_h: 0.0,
    stream_2_Ethane_mass_flow_kg_h: 0.0,
    stream_2_Propane_mass_flow_kg_h: 0.0,
    stream_2_i_Butane_mass_flow_kg_h: 0.0,
    stream_2_n_Butane_mass_flow_kg_h: 0.0,
    stream_2_i_Pentane_mass_flow_kg_h: 0.0,
    stream_2_n_Pentane_mass_flow_kg_h: 0.0,
    stream_1_mass_flow_kg_h: 0.0,
    stream_1_molar_flow_kgmole_h: 0.0,
    stream_2_mass_flow_kg_h: 0.0,
    stream_2_molar_flow_kgmole_h: 0.0,
    stream_3_temperature_C: 0.0,
    stream_Q_100: 0.0,
    stream_16_Methane_molar_flow_kgmole_h: 0.0,
    stream_16_Ethane_molar_flow_kgmole_h: 0.0,
    stream_16_Propane_molar_flow_kgmole_h: 0.0,
    stream_16_i_Butane_molar_flow_kgmole_h: 0.0,
    stream_16_n_Butane_molar_flow_kgmole_h: 0.0,
    stream_16_i_Pentane_molar_flow_kgmole_h: 0.0,
    stream_16_n_Pentane_molar_flow_kgmole_h: 0.0,
    stream_16_Methane_mass_flow_kg_h: 0.0,
    stream_16_Ethane_mass_flow_kg_h: 0.0,
    stream_16_Propane_mass_flow_kg_h: 0.0,
    stream_16_i_Butane_mass_flow_kg_h: 0.0,
    stream_16_n_Butane_mass_flow_kg_h: 0.0,
    stream_16_i_Pentane_mass_flow_kg_h: 0.0,
    stream_16_n_Pentane_mass_flow_kg_h: 0.0,
    stream_17_Methane_molar_flow_kgmole_h: 0.0,
    stream_17_Ethane_molar_flow_kgmole_h: 0.0,
    stream_17_Propane_molar_flow_kgmole_h: 0.0,
    stream_17_i_Butane_molar_flow_kgmole_h: 0.0,
    stream_17_n_Butane_molar_flow_kgmole_h: 0.0,
    stream_17_i_Pentane_molar_flow_kgmole_h: 0.0,
    stream_17_n_Pentane_molar_flow_kgmole_h: 0.0,
    stream_17_Methane_mass_flow_kg_h: 0.0,
    stream_17_Ethane_mass_flow_kg_h: 0.0,
    stream_17_Propane_mass_flow_kg_h: 0.0,
    stream_17_i_Butane_mass_flow_kg_h: 0.0,
    stream_17_n_Butane_mass_flow_kg_h: 0.0,
    stream_17_i_Pentane_mass_flow_kg_h: 0.0,
    stream_17_n_Pentane_mass_flow_kg_h: 0.0,
    stream_16_mass_flow_kg_h: 0.0,
    stream_16_molar_flow_kgmole_h: 0.0,
    stream_17_mass_flow_kg_h: 0.0,
    stream_17_molar_flow_kgmole_h: 0.0,
    stream_16_temperature_C: 0.0,
    stream_17_temperature_C: 0.0,
    lowTempDistModalStatus: false,
  },

  reducers: {
    setProp: (state, action) => {
      state.gas_feed_temperature = action.payload.gas_feed_temperature;
      state.gas_feed_pressure = action.payload.gas_feed_pressure;
      state.gas_feed_mass_flow = action.payload.gas_feed_mass_flow;
      state.stream_Comp_Fraction = action.payload.stream_Comp_Fraction;
      state.stream_3_pressure_kPa = action.payload.stream_3_pressure_kPa;
    },
    setGasComp: (state, action) => {
      state.gas_feed_ch4_mass_frac = action.payload.gas_feed_ch4_mass_frac;
      state.gas_feed_c2h6_mass_frac = action.payload.gas_feed_c2h6_mass_frac;
      state.gas_feed_c3h8_mass_frac = action.payload.gas_feed_c3h8_mass_frac;
      state.gas_feed_ic4h10_mass_frac = action.payload.gas_feed_ic4h10_mass_frac;
      state.gas_feed_nc4h10_mass_frac = action.payload.gas_feed_nc4h10_mass_frac;
      state.gas_feed_ic5h12_mass_frac = action.payload.gas_feed_ic5h12_mass_frac;
      state.gas_feed_nc5h12_mass_frac = action.payload.gas_feed_nc5h12_mass_frac;
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
