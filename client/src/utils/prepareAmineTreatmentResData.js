export const prepareAmineTreatmentData = (data) => {
  const sourGasResData = [];
  const leanAmineResData = [];
  const predictedData = [];
  if (data) {
    for (const elem of data) {
      sourGasResData.push({
        "Температура сырьевого газа, град С": elem.sour_gas_temperature,
        "Массовый расход сырьевого газа, кг/ч": elem.sour_gas_mass_flow,
        "Мольная доля диоксида углерода в сырьевом газе": elem.sour_gas_co2,
        "Мольная доля метана в сырьевом газе": elem.sour_gas_ch4,
        "Мольная доля этана в сырьевом газе": elem.sour_gas_c2h8,
        "Мольная доля пропана в сырьевом газе": elem.sour_gas_c3h8,
        "Мольная доля и-бутана в сырьевом газе": elem.sour_gas_ic4h10,
        "Мольная доля н-бутана в сырьевом газе": elem.sour_gas_nc4h10,
        "Мольная доля и-пентан в сырьевом газе": elem.sour_gas_ic5h12,
        "Мольная доля н-пентан в сырьевом газе": elem.sour_gas_nc5h12,
        "Мольная доля сероводорода в сырьевом газе": elem.sour_gas_h2s,
        "Мольная доля воды в сырьевом газе": elem.sour_gas_h2o,
        "Мольная доля MDEA в сырьевом газе": elem.sour_gas_MDEA,
      });
      leanAmineResData.push({
        "Температура очищенного амина, град С": elem.amine_temperature,
        "Массовый расход очищенного амина, кг/ч": elem.amine_mass_flow,
        "Мольная доля диоксида углерода в очищенном амине": elem.amine_co2,
        "Мольная доля метана в очищенном амине": elem.amine_ch4,
        "Мольная доля этана в очищенном амине": elem.amine_c2h8,
        "Мольная доля пропана в очищенном амине": elem.amine_c3h8,
        "Мольная доля и-бутана в очищенном амине": elem.amine_ic4h10,
        "Мольная доля н-бутана в очищенном амине": elem.amine_nch4h10,
        "Мольная доля и-пентан в очищенном амине": elem.amine_ic5h12,
        "Мольная доля н-пентан в очищенном амине": elem.amine_nc5h12,
        "Мольная доля сероводорода в очищенном амине": elem.amine_h2s,
        "Мольная доля воды в очищенном амине": elem.amine_h2o,
        "Мольная доля MDEA в очищенном амине": elem.amine_MDEA,
      });
      predictedData.push({
        "Температура очищенного газа, град С": elem.sweet_gas_temperature,
        "Массовый расход очищенного газа, кг/ч": elem.sweet_gas_mass_flow,
        "Концентрация сероводорода в очищенном газе, ppm": elem.sweet_gas_H2S_ppm,
        "Концентрация дикосида углерода в очищенном газе, ppm": elem.sweet_gas_CO2_ppm,
        "Температура насыщенного амина, град С": elem.rich_amine_temperature,
        "Массовый расход насыщенного амина, кг/ч": elem.rich_amine_mass_flow,
        "Мольная доля сероводорода в насыщенном амине": elem.rich_amine_h2s,
        "Мольная доля диоксида углерода в насыщенном амине": elem.rich_amine_co2,
        "Мольная доля воды в насыщенном амине": elem.rich_amine_h2o,
        "Мольная доля MDEA в очищенном амине": elem.rich_amine_MDEA,
      });
    }
  }

  return { sourGasResData, leanAmineResData, predictedData };
};

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
    "Температура очищенного амина, град С": data.amine_temperature,
    "Массовый расход очищенного амина, кг/ч": data.amine_mass_flow,
    "Мольная доля диоксида углерода в очищенном амине": data.amine_co2,
    "Мольная доля метана в очищенном амине": data.amine_ch4,
    "Мольная доля этана в очищенном амине": data.amine_c2h8,
    "Мольная доля пропана в очищенном амине": data.amine_c3h8,
    "Мольная доля и-бутана в очищенном амине": data.amine_ic4h10,
    "Мольная доля н-бутана в очищенном амине": data.amine_nc4h10,
    "Мольная доля и-пентан в очищенном амине": data.amine_ic5h12,
    "Мольная доля н-пентан в очищенном амине": data.amine_nc5h12,
    "Мольная доля сероводорода в очищенном амине": data.amine_h2s,
    "Мольная доля воды в очищенном амине": data.amine_h2o,
    "Мольная доля MDEA в очищенном амине": data.amine_MDEA,
  };
};

export const preparePredictedData = (data) => {
  return {
    "Температура очищенного газа, град С": data.sweet_gas_temperature,
    "Массовый расход очищенного газа, кг/ч": data.sweet_gas_mass_flow,
    "Концентрация сероводорода в очищенном газе, ppm": data.sweet_gas_H2S_ppm,
    "Концентрация дикосида углерода в очищенном газе, ppm": data.sweet_gas_CO2_ppm,
    "Температура насыщенного амина, град С": data.rich_amine_temperature,
    "Массовый расход насыщенного амина, кг/ч": data.rich_amine_mass_flow,
    "Мольная доля сероводорода в насыщенном амине": data.rich_amine_h2s,
    "Мольная доля диоксида углерода в насыщенном амине": data.rich_amine_co2,
    "Мольная доля воды в насыщенном амине": data.rich_amine_h2o,
    "Мольная доля MDEA в очищенном амине": data.rich_amine_MDEA,
  };
};
