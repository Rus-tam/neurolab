export interface ISourGasData {
  id: string;
  sweet_gas_temperature: number;
  sour_gas_temperature: number;
  sour_gas_mass_flow: number;
  sour_gas_co2: number;
  sour_gas_ch4: number;
  sour_gas_c2h8: number;
  sour_gas_c3h8: number;
  sour_gas_ic4h10: number;
  sour_gas_nc4h10: number;
  sour_gas_ic5h12: number;
  sour_gas_nc5h12: number;
  sour_gas_h2s: number;
  sour_gas_h2o: number;
  sour_gas_MDEA: number;
}

export interface ILeanAmineData {
  id: string;
  amine_temperature: number;
  amine_mass_flow: number;
  amine_co2: number;
  amine_ch4: number;
  amine_c2h8: number;
  amine_c3h8: number;
  amine_ic4h10: number;
  amine_nch4h10: number;
  amine_ic5h12: number;
  amine_nc5h12: number;
  amine_h2s: number;
  amine_h2o: number;
  amine_MDEA: number;
}

export interface IPredictData {
  id: string;
  sweet_gas_temperature: string;
  sweet_gas_mass_flow: string;
  sweet_gas_H2S_ppm: string;
  sweet_gas_CO2_ppm: string;
  rich_amine_temperature: string;
  rich_amine_mass_flow: string;
  rich_amine_h2s: string;
  rich_amine_co2: string;
  rich_amine_h2o: string;
  rich_amine_MDEA: string;
}
