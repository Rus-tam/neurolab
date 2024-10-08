import { createSlice } from "@reduxjs/toolkit";

const amineTreatmentSlice = createSlice({
  name: "amineTreatment",
  initialState: {
    sour_gas_temperature: 20,
    sour_gas_mass_flow: 15000,
    sour_gas_pressure: 6701.325,
    sour_gas_co2: 0.04,
    sour_gas_ch4: 0.68,
    sour_gas_c2h8: 0.05,
    sour_gas_c3h8: 0.02,
    sour_gas_ic4h10: 0.07,
    sour_gas_nc4h10: 0.08,
    sour_gas_ic5h12: 0.03,
    sour_gas_nc5h12: 0.01,
    sour_gas_h2s: 0.02,
    sour_gas_h2o: 0.0,
    sour_gas_MDEA: 0.0,
    amine_temperature: 25,
    amine_mass_flow: 15000,
    amine_pressure: 6701.325,
    amine_co2: 0.0025,
    amine_ch4: 0.0,
    amine_c2h8: 0.0,
    amine_c3h8: 0.0,
    amine_ic4h10: 0.0,
    amine_nch4h10: 0.0,
    amine_ic5h12: 0.0,
    amine_nc5h12: 0.0,
    amine_h2s: 0.0002,
    amine_h2o: 0.8563,
    amine_MDEA: 0.141,

    feed_gas_mol_weight: 0.0,
    lean_amine_mol_weight: 0.0,
    feed_gas_mass_density: 0.0,
    lean_amine_mass_density: 0.0,
    sweet_gas_temperature: 0.0,
    sweet_gas_mol_flow: 0.0,
    rich_amine_mol_flow: 0.0,
    rich_amine_temperature: 0.0,
    rich_amine_h2s_mol_flow: 0.0,
    sweet_gas_h2s_mol_flow: 0.0,
    rich_amine_co2_mol_flow: 0.0,
    sweet_gas_co2_mol_flow: 0.0,
    sweet_gas_mol_weight: 0.0,
    rich_amine_mol_weight: 0.0,

    modalSGWindowStatus: false,
    modalAmineWindowStatus: false,
  },
  reducers: {
    setSourGasTempPress: (state, action) => {
      state.sour_gas_temperature = action.payload.sour_gas_temperature;
      state.sour_gas_mass_flow = action.payload.sour_gas_mass_flow;
    },
    setAmineTempPress: (state, action) => {
      state.amine_temperature = action.payload.amine_temperature;
      state.amine_mass_flow = action.payload.amine_mass_flow;
    },
    setSourGasInitialData: (state, action) => {
      state.sour_gas_co2 = action.payload.sour_gas_co2;
      state.sour_gas_ch4 = action.payload.sour_gas_ch4;
      state.sour_gas_c2h8 = action.payload.sour_gas_c2h8;
      state.sour_gas_c3h8 = action.payload.sour_gas_c3h8;
      state.sour_gas_ic4h10 = action.payload.sour_gas_ic4h10;
      state.sour_gas_nc4h10 = action.payload.sour_gas_nc4h10;
      state.sour_gas_ic5h12 = action.payload.sour_gas_ic5h12;
      state.sour_gas_nc5h12 = action.payload.sour_gas_nc5h12;
      state.sour_gas_h2s = action.payload.sour_gas_h2s;
      state.sour_gas_h2o = action.payload.sour_gas_h2o;
    },
    setAmineInitialData(state, action) {
      state.amine_MDEA = action.payload.amine_MDEA;
      state.amine_h2o = action.payload.amine_h2o;
      state.amine_co2 = action.payload.amine_co2;
      state.amine_h2s = action.payload.amine_h2s;
    },
    setSGModalWindowStatus(state, action) {
      state.modalSGWindowStatus = action.payload.modalSGWindowStatus;
    },
    setAmineModalWindowStatus(state, action) {
      state.modalAmineWindowStatus = action.payload.modalAmineWindowStatus;
    },
    setAmineTreatmentResults(state, action) {
      state.feed_gas_mol_weight = action.payload.feed_gas_mol_weight;
      state.lean_amine_mol_weight = action.payload.lean_amine_mol_weight;
      state.feed_gas_mass_density = action.payload.feed_gas_mass_density;
      state.lean_amine_mass_density = action.payload.lean_amine_mass_density;
      state.sweet_gas_temperature = action.payload.sweet_gas_temperature;
      state.sweet_gas_mol_flow = action.payload.sweet_gas_mol_flow;
      state.rich_amine_mol_flow = action.payload.rich_amine_mol_flow;
      state.rich_amine_temperature = action.payload.rich_amine_temperature;
      state.rich_amine_h2s_mol_flow = action.payload.rich_amine_h2s_mol_flow;
      state.sweet_gas_h2s_mol_flow = action.payload.sweet_gas_h2s_mol_flow;
      state.rich_amine_co2_mol_flow = action.payload.rich_amine_co2_mol_flow;
      state.sweet_gas_co2_mol_flow = action.payload.sweet_gas_co2_mol_flow;
      state.sweet_gas_mol_weight = action.payload.sweet_gas_mol_weight;
      state.rich_amine_mol_weight = action.payload.rich_amine_mol_weight;
    },
  },
});

export const {
  setSourGasTempPress,
  setAmineTempPress,
  setSourGasInitialData,
  setAmineInitialData,
  setSGModalWindowStatus,
  setAmineModalWindowStatus,
  setAmineTreatmentResults,
} = amineTreatmentSlice.actions;

export const amineTreatmentReducer = amineTreatmentSlice.reducer;
