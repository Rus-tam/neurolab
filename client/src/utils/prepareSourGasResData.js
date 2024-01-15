export const prepareSourGasResData = (data) => {
  return {
    "Температура сырьевого газа, град С": data.sour_gas_temperature,
    "Массовый расход сырьевого газа, кг/ч": data.sour_gas_mass_flow,
    "Мольная доля диоксида углерода в сырьевом газе": data.sour_gas_co2,
    "Мольная доля метана в сырьевом газе": data.sour_gas_ch4,
    "Мольная доля этана в сырьевом газе": data.sour_gas_c2h8,
    "Мольная доля пропана в сырьевом газе": data.sour_gas_c3h8,
    "Мольная доля и-бутана в сырьевом газе": data.sour_gas_ic4h10,
    "Мольная доля н-бутана в сырьевом газе": data.sour_gas_nc4h10,
    "Мольная доля и-пентан в сырьевом газе": data.sour_gas_ic5h12,
    "Мольная доля н-пентан в сырьевом газе": data.sour_gas_nc5h12,
    "Мольная доля сероводорода в сырьевом газе": data.sour_gas_h2s,
    "Мольная доля воды в сырьевом газе": data.sour_gas_h2o,
  };
};
