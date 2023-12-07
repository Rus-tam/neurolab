import { createSlice } from "@reduxjs/toolkit";

const lowTempDistSlice = createSlice({
  name: "lowTempDist",
  initialState: {
    gas_temperature: 20,
    gas_mass_flow: 10000,
    n2_mass_frac: 0.001,
    ch4_mass_frac: 0.65,
    c2h6_mass_frac: 0.21,
    c3h8_mass_frac: 0.025,
    ic4h10_mass_frac: 0.01,
    nc4h10_mass_frac: 0.012,
    c5h12_mass_frac: 0.092,
  },

  reducers: {
    setGasProp: (state, action) => {
      state.gas_temperature = action.payload.gas_temperature;
      state.gas_mass_flow = action.payload.gas_mass_flow;
      state.n2_mass_frac = action.payload.n2_mass_frac;
      state.ch4_mass_frac = action.payload.ch4_mass_frac;
      state.c2h6_mass_frac = action.payload.c2h6_mass_frac;
      state.c3h8_mass_frac = action.payload.c3h8_mass_frac;
      state.ic4h10_mass_frac = action.payload.ic4h10_mass_frac;
      state.c5h12_mass_frac = action.payload.c5h12_mass_frac;
    },
  },
});

export const { setGasProp } = lowTempDistSlice.actions;

export const lowTempDistReducer = lowTempDistSlice.reducer;
