import { createSlice } from "@reduxjs/toolkit";

const lowTempDistSlice = createSlice({
  name: "lowTempDist",
  initialState: {
    feed_gas_temperature: -5.0,
    feed_gas_mass_flow: 1000.0,
    feed_gas_pressure: 4000.0,
    cooled_gas_pressure: 2500.0,
    column_power: 2000.0,
    feed_gas_n2: 0.0,
    feed_gas_co2: 0.0,
    feed_gas_ch4: 0.679,
    feed_gas_c2h6: 0.1189,
    feed_gas_c3h8: 0.0669,
    feed_gas_ic4h10: 0.109,
    feed_gas_nc4h10: 0.0083,
    feed_gas_ic5h12: 0.009,
    feed_gas_nc5h12: 0.0085,
    sep_vap_mass_flow: 0.0,
    sep_liq_mass_flow: 0.0,
    sep_vap_ch4: 0.0,
    sep_vap_c2h6: 0.0,
    sep_vap_c3h8: 0.0,
    sep_vap_ic4h10: 0.0,
    sep_vap_nc4h10: 0.0,
    sep_vap_ic5h12: 0.0,
    sep_vap_nc5h12: 0.0,
    sep_liq_ch4: 0.0,
    sep_liq_c2h6: 0.0,
    sep_liq_c3h8: 0.0,
    sep_liq_ic4h10: 0.0,
    sep_liq_nc4h10: 0.0,
    sep_liq_ic5h12: 0.0,
    sep_liq_nc5h12: 0.0,
    cooled_gas_temperature: 0.0,
    expander_power: 0.0,
    column_bot_prod_temp: 0.0,
    column_top_prod_temp: 0.0,
    column_top_prod_mass_flow: 0.0,
    column_bot_prod_mass_flow: 0.0,
    col_top_ch4: 0.0,
    col_top_c2h6: 0.0,
    col_top_c3h8: 0.0,
    col_top_ic4h10: 0.0,
    col_top_nc4h10: 0.0,
    col_top_ic5h12: 0.0,
    col_top_nc5h12: 0.0,
    col_bot_ch4: 0.0,
    col_bot_c2h6: 0.0,
    col_bot_c3h8: 0.0,
    col_bot_ic4h10: 0.0,
    col_bot_nc4h10: 0.0,
    col_bot_ic5h12: 0.0,
    col_bot_nc5h12: 0.0,
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
      state.feed_gas_n2 = action.payload.feed_gas_n2;
      state.feed_gas_co2 = action.payload.feed_gas_co2;
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
  },
});

export const { setProp, setGasComp, setModalWindowStatus } = lowTempDistSlice.actions;

export const lowTempDistReducer = lowTempDistSlice.reducer;
