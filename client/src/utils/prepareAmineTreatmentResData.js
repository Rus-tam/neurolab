export const prepareSourGasResData = (data) => {
  if (data) {
    return {
      "Температура сырьевого газа, град С": data.table_sour_gas_temperature,
      "Массовый расход сырьевого газа, кг/ч": data.table_sour_gas_mass_flow,
      "Мольная доля диоксида углерода в сырьевом газе": data.table_sour_gas_co2,
      "Мольная доля метана в сырьевом газе": data.table_sour_gas_ch4,
      "Мольная доля этана в сырьевом газе": data.table_sour_gas_c2h8,
      "Мольная доля пропана в сырьевом газе": data.table_sour_gas_c3h8,
      "Мольная доля и-бутана в сырьевом газе": data.table_sour_gas_ic4h10,
      "Мольная доля н-бутана в сырьевом газе": data.table_sour_gas_nc4h10,
      "Мольная доля и-пентан в сырьевом газе": data.table_sour_gas_ic5h12,
      "Мольная доля н-пентан в сырьевом газе": data.table_sour_gas_nc5h12,
      "Мольная доля сероводорода в сырьевом газе": data.table_sour_gas_h2s,
      "Мольная доля воды в сырьевом газе": data.table_sour_gas_h2o,
      "Мольная доля MDEA в сырьевом газе": data.table_sour_gas_MDEA,
    };
  }
};

export const prepareLeanAmineResData = (data) => {
  return {
    "Температура очищенного амина, град С": data.table_amine_temperature,
    "Массовый расход очищенного амина, кг/ч": data.table_amine_mass_flow,
    "Мольная доля диоксида углерода в очищенном амине": data.table_amine_co2,
    "Мольная доля метана в очищенном амине": data.table_amine_ch4,
    "Мольная доля этана в очищенном амине": data.table_amine_c2h8,
    "Мольная доля пропана в очищенном амине": data.table_amine_c3h8,
    "Мольная доля и-бутана в очищенном амине": data.table_amine_ic4h10,
    "Мольная доля н-бутана в очищенном амине": data.table_amine_nc4h10,
    "Мольная доля и-пентан в очищенном амине": data.table_amine_ic5h12,
    "Мольная доля н-пентан в очищенном амине": data.table_amine_nc5h12,
    "Мольная доля сероводорода в очищенном амине": data.table_amine_h2s,
    "Мольная доля воды в очищенном амине": data.table_amine_h2o,
    "Мольная доля MDEA в очищенном амине": data.table_amine_MDEA,
  };
};

export const preparePredictedData = (data) => {
  return {
    "Температура очищенного газа, град С": data.table_sweet_gas_temperature,
    "Массовый расход очищенного газа, кг/ч": data.table_sweet_gas_mass_flow,
    "Концентрация сероводорода в очищенном газе, ppm": data.table_sweet_gas_H2S_ppm,
    "Концентрация дикосида углерода в очищенном газе, ppm": data.table_sweet_gas_CO2_ppm,
    "Температура насыщенного амина, град С": data.table_rich_amine_temperature,
    "Массовый расход насыщенного амина, кг/ч": data.table_rich_amine_mass_flow,
    "Мольная доля сероводорода в насыщенном амине": data.table_rich_amine_h2s,
    "Мольная доля диоксида углерода в насыщенном амине": data.table_rich_amine_co2,
    "Мольная доля воды в насыщенном амине": data.table_rich_amine_h2o,
    "Мольная доля MDEA в очищенном амине": data.table_rich_amine_MDEA,
  };
};
