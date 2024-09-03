import { createSlice } from "@reduxjs/toolkit";

const lowTempDistSlice = createSlice({
  name: "lowTempDist",
  initialState: {
    gas_feed_temperature: -5.0,
    gas_feed_pressure: 4000.0,
    gas_feed_mass_flow: 10000.0,
    gas_feed_ch4_mass_frac: 0.679,
    gas_feed_c2h6_mass_frac: 0.1189,
    gas_feed_c3h8_mass_frac: 0.0669,
    gas_feed_ic4h10_mass_frac: 0.109,
    gas_feed_nc4h10_mass_frac: 0.0083,
    gas_feed_ic5h12_mass_frac: 0.009,
    gas_feed_nc5h12_mass_frac: 0.0085,
    comp_frac: 0.02,
    stream_3_pressure: 2072,
    stream_1_mass_flow: 0.0,
    stream_2_mass_flow: 0.0,
    stream_1_methane_mass_fr: 0.0,
    stream_1_ethane_mass_fr: 0.0,
    stream_1_propane_mass_fr: 0.0,
    stream_1_i_butane_mass_fr: 0.0,
    stream_1_n_butane_mass_fr: 0.0,
    stream_1_i_pentane_mass_fr: 0.0,
    stream_1_n_pentane_mass_fr: 0.0,
    stream_2_methane_mass_fr: 0.0,
    stream_2_ethane_mass_fr: 0.0,
    stream_2_propane_mass_fr: 0.0,
    stream_2_i_butane_mass_fr: 0.0,
    stream_2_n_butane_mass_fr: 0.0,
    stream_2_i_pentane_mass_fr: 0.0,
    stream_2_n_pentane_mass_fr: 0.0,
    stream_3_temperature: 0.0,
    expander_power: 0.0,
    stream_16_temperature: 0.0,
    stream_17_temperature: 0.0,
    stream_16_mass_flow: 0.0,
    stream_17_mass_flow: 0.0,
    stream_16_methane_mass_fr: 0.0,
    stream_16_ethane_mass_fr: 0.0,
    stream_16_propane_mass_fr: 0.0,
    stream_16_i_butane_mass_fr: 0.0,
    stream_16_n_butane_mass_fr: 0.0,
    stream_16_i_pentane_mass_fr: 0.0,
    stream_16_n_pentane_mass_fr: 0.0,
    stream_17_methane_mass_fr: 0.0,
    stream_17_ethane_mass_fr: 0.0,
    stream_17_propane_mass_fr: 0.0,
    stream_17_i_butane_mass_fr: 0.0,
    stream_17_n_butane_mass_fr: 0.0,
    stream_17_i_pentane_mass_fr: 0.0,
    stream_17_n_pentane_mass_fr: 0.0,
    column_power: 0.0,
    lowTempDistModalStatus: false,
  },

  reducers: {
    setProp: (state, action) => {
      state.gas_feed_temperature = action.payload.gas_feed_temperature;
      state.gas_feed_pressure = action.payload.gas_feed_pressure;
      state.gas_feed_mass_flow = action.payload.gas_feed_mass_flow;
      state.comp_frac = action.payload.comp_frac;
      state.stream_3_pressure = action.payload.stream_3_pressure;
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
      state.stream_2_mass_flow = action.payload.stream_2_mass_flow;
      state.stream_1_methane_mass_fr = action.payload.stream_1_methane_mass_fr;
      state.stream_1_ethane_mass_fr = action.payload.stream_1_ethane_mass_fr;
      state.stream_1_propane_mass_fr = action.payload.stream_1_propane_mass_fr;
      state.stream_1_i_butane_mass_fr = action.payload.stream_1_i_butane_mass_fr;
      state.stream_1_n_butane_mass_fr = action.payload.stream_1_n_butane_mass_fr;
      state.stream_1_i_pentane_mass_fr = action.payload.stream_1_i_pentane_mass_fr;
      state.stream_1_n_pentane_mass_fr = action.payload.stream_1_n_pentane_mass_fr;
      state.stream_2_methane_mass_fr = action.payload.stream_2_methane_mass_fr;
      state.stream_2_ethane_mass_fr = action.payload.stream_2_ethane_mass_fr;
      state.stream_2_propane_mass_fr = action.payload.stream_2_propane_mass_fr;
      state.stream_2_i_butane_mass_fr = action.payload.stream_2_i_butane_mass_fr;
      state.stream_2_n_butane_mass_fr = action.payload.stream_2_n_butane_mass_fr;
      state.stream_2_i_pentane_mass_fr = action.payload.stream_2_i_pentane_mass_fr;
      state.stream_2_n_pentane_mass_fr = action.payload.stream_2_n_pentane_mass_fr;
      state.stream_3_temperature = action.payload.stream_3_temperature;
      state.expander_power = action.payload.expander_power;
      state.stream_16_temperature = action.payload.stream_16_temperature;
      state.stream_17_temperature = action.payload.stream_17_temperature;
      state.stream_16_mass_flow = action.payload.stream_16_mass_flow;
      state.stream_17_mass_flow = action.payload.stream_17_mass_flow;
      state.stream_16_methane_mass_fr = action.payload.stream_16_methane_mass_fr;
      state.stream_16_ethane_mass_fr = action.payload.stream_16_ethane_mass_fr;
      state.stream_16_propane_mass_fr = action.payload.stream_16_propane_mass_fr;
      state.stream_16_i_butane_mass_fr = action.payload.stream_16_i_butane_mass_fr;
      state.stream_16_n_butane_mass_fr = action.payload.stream_16_n_butane_mass_fr;
      state.stream_16_i_pentane_mass_fr = action.payload.stream_16_i_pentane_mass_fr;
      state.stream_16_n_pentane_mass_fr = action.payload.stream_16_n_pentane_mass_fr;
      state.stream_17_methane_mass_fr = action.payload.stream_17_methane_mass_fr;
      state.stream_17_ethane_mass_fr = action.payload.stream_17_ethane_mass_fr;
      state.stream_17_propane_mass_fr = action.payload.stream_17_propane_mass_fr;
      state.stream_17_i_butane_mass_fr = action.payload.stream_17_i_butane_mass_fr;
      state.stream_17_n_butane_mass_fr = action.payload.stream_17_n_butane_mass_fr;
      state.stream_17_i_pentane_mass_fr = action.payload.stream_17_i_pentane_mass_fr;
      state.stream_17_n_pentane_mass_fr = action.payload.stream_17_n_pentane_mass_fr;
      state.column_power = action.payload.column_power;
    },
  },
});

export const { setProp, setGasComp, setModalWindowStatus, setLowTempDistResults } = lowTempDistSlice.actions;

export const lowTempDistReducer = lowTempDistSlice.reducer;
