export interface IAmineTreatmentResult {
  feed_gas_mol_weight: number,
  lean_amine_mol_weight: number,
  feed_gas_mass_density: number,
  lean_amine_mass_density: number,
  sweet_gas_temperature: number,
  sweet_gas_mol_flow: number,
  rich_amine_mol_flow: number,
  rich_amine_temperature: number,
  rich_amine_h2s_mol_flow: number,
  sweet_gas_h2s_mol_flow: number,
  rich_amine_co2_mol_flow: number,
  sweet_gas_co2_mol_flow: number,
  sweet_gas_mol_weight: number,
  rich_amine_mol_weight: number,
}

export interface ISourGasInitialData {
  sour_gas_temperature: number,
  sour_gas_mass_flow: number,
  sour_gas_pressure: number,
  sour_gas_co2: number,
  sour_gas_ch4: number,
  sour_gas_c2h8: number,
  sour_gas_c3h8: number,
  sour_gas_ic4h10: number,
  sour_gas_nc4h10: number,
  sour_gas_ic5h12: number,
  sour_gas_nc5h12: number,
  sour_gas_h2s: number,
  sour_gas_h2o: number,
  sour_gas_MDEA: number,
}

export interface IAmineInitialData {
  amine_temperature: number,
  amine_mass_flow: number,
  amine_pressure: number,
  amine_co2: number,
  amine_ch4: number,
  amine_c2h8: number,
  amine_c3h8: number,
  amine_ic4h10: number,
  amine_nch4h10: number,
  amine_ic5h12: number,
  amine_nc5h12: number,
  amine_h2s: number,
  amine_h2o: number,
  amine_MDEA: number,
}

export interface IAmineTreatmentRes {
  "sourGasInitialData": ISourGasInitialData[],
  "amineInitialData": IAmineInitialData[],
  "amineTreatmentResult": IAmineTreatmentResult[]
}
