import { createSlice } from "@reduxjs/toolkit";

const lowTempDistSlice = createSlice({
  name: "lowTempDist",
  initialState: {
    gas_temperature: 20,
    gas_mass_flow: 10000,
    gas_pressure: 4.4,
    n2_mass_frac: 0.018,
    co2_mass_frac: 0.011,
    ch4_mass_frac: 0.576,
    c2h6_mass_frac: 0.113,
    c3h8_mass_frac: 0.128,
    ic4h10_mass_frac: 0.0475,
    nc4h10_mass_frac: 0.0515,
    c5h12_mass_frac: 0.02,
    c6h14_mass_frac: 0.0084,
    c7h16_mass_frac: 0.003,
    column_pressure: 3.699,
    gas_pressure_after_D1: 0.021,
    heat_flow_T1: 5.5,
  },

  reducers: {
    setProp: (state, action) => {
      state.gas_temperature = action.payload.gas_temperature;
      state.gas_mass_flow = action.payload.gas_mass_flow;
      state.gas_pressure = action.payload.gas_pressure;
      state.column_pressure = action.payload.column_pressure;
      state.gas_pressure_after_D1 = action.payload.gas_pressure_after_D1;
      state.heat_flow_T1 = action.payload.heat_flow_t1;
    },
    setGasComp: (state, action) => {
      state.n2_mass_frac = action.payload.n2_mass_frac;
      state.ch4_mass_frac = action.payload.ch4_mass_frac;
      state.c2h6_mass_frac = action.payload.c2h6_mass_frac;
      state.c3h8_mass_frac = action.payload.c3h8_mass_frac;
      state.ic4h10_mass_frac = action.payload.ic4h10_mass_frac;
      state.nc4h10_mass_frac = action.payload.nc4h10_mass_frac;
      state.c5h12_mass_frac = action.payload.c5h12_mass_frac;
      state.c6h14_mass_frac = action.payload.c6h14_mass_frac;
      state.c7h16_mass_frac = action.payload.c7h16_mass_frac;
    },
  },
});

export const { setProp, setGasComp } = lowTempDistSlice.actions;

export const lowTempDistReducer = lowTempDistSlice.reducer;
