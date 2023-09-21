import { createSlice } from "@reduxjs/toolkit";

const simpleIsoSlice = createSlice({
  name: "simpleIso",
  initialState: { product_concentration: null, product_temperature: null },
  reducers: {
    setSimpleIsoRes: (state, action) => {
      state.product_concentration = action.payload.product_concentration;
      state.product_temperature = action.payload.product_temperature;
    },
  },
});

export const { setSimpleIsoRes } = simpleIsoSlice.actions;

export const simpleIsoReducer = simpleIsoSlice.reducer;
