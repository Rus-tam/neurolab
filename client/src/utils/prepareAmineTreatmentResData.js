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
    "Мольная доля н-бутана в очищенном амине": data.table_amine_nch4h10,
    "Мольная доля и-пентан в очищенном амине": data.table_amine_ic5h12,
    "Мольная доля н-пентан в очищенном амине": data.table_amine_nc5h12,
    "Мольная доля сероводорода в очищенном амине": data.table_amine_h2s,
    "Мольная доля воды в очищенном амине": data.table_amine_h2o,
    "Мольная доля MDEA в очищенном амине": data.table_amine_MDEA,
  };
};

export const preparePredictedData = (data) => {
  return {
    "Плотность кислого газа, кг/м3": data.table_feed_gas_mass_density,
    "Молярный вес кислого газа": data.table_feed_gas_mol_weight,
    "Плотность регенерированного амина, кг/м3": data.table_lean_amine_mass_density,
    "Молярный вес регенерированного амина": data.table_lean_amine_mol_weight,
    "Молярный расход CO2 в насыщенном амине, кгмоль/ч": data.table_rich_amine_co2_mol_flow,
    "Молярный расход H2S в насыщенном амине, кгмоль/ч": data.table_rich_amine_h2s_mol_flow,
    "Молярный расход насыщенного амина, кгмоль/ч": data.table_rich_amine_mol_flow,
    "Молярный вес насыщенного амина": data.table_rich_amine_mol_weight,
    "Температура насыщенного амина, град Цельсия": data.table_rich_amine_temperature,
    "Молярный расход CO2 в очищенном газе, кгмоль/ч": data.table_sweet_gas_co2_mol_flow,
    "Молярный расход H2S в очищенном газе, кгмоль/ч": data.table_sweet_gas_h2s_mol_flow,
    "Молярный расход очищенного газа, кгмоль/ч": data.table_sweet_gas_mol_flow,
    "Молярный вес очищенного газа": data.table_sweet_gas_mol_weight,
  };
};
