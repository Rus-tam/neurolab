import { createSlice } from "@reduxjs/toolkit";

const simpleIsoSlice = createSlice({
  name: "simpleIso",
  initialState: {
    vessel_volume: 1,
    feed_mass_flow: 200,
    feed_temperature: 25,
    product_concentration: null,
    product_temperature: null,
  },
  reducers: {
    setSimpleIsoRes: (state, action) => {
      state.product_concentration = action.payload.product_concentration;
      state.product_temperature = action.payload.product_temperature;
    },
    setSimpleIsoInitialData: (state, action) => {
      state.vessel_volume = action.payload.vessel_volume;
      state.feed_mass_flow = action.payload.feed_mass_flow;
      state.feed_temperature = action.payload.feed_temperature;
    },
  },
});

export const { setSimpleIsoRes, setSimpleIsoInitialData } = simpleIsoSlice.actions;

export const simpleIsoReducer = simpleIsoSlice.reducer;
