export const prepareFeedGasData = (data) => {
  if (data) {
    return {
      "Температура сырьевого газа, град Цельсия": data.table_feed_gas_temperature,
      "Давление сырьевого газа, Па": data.table_feed_gas_pressure,
      "Массовая доля диоксида углерода в сырьевом газе": data.table_feed_gas_co2,
      "Массовая доля азота в сырьевом газе": data.table_feed_gas_n2,
      "Массовая доля метана в сырьевом газе": data.table_feed_gas_ch4,
      "Массовая доля этана в сырьевом газе": data.table_feed_gas_c2h6,
      "Массовая доля пропана в сырьевом газе": data.table_feed_gas_c3h8,
      "Массовая доля и-бутана в сырьевом газе": data.table_feed_gas_ic4h10,
      "Массовая доля н-бутана в сырьевом газе": data.table_feed_gas_nc4h10,
      "Массовая доля и-пентана в сырьевом газе": data.table_feed_gas_ic5h12,
      "Массовая доля н-пентана в сырьевом газе": data.table_feed_gas_nc5h12,
      "Тепловая нагрузка колонны, кВт": data.table_column_power,
      "Давление газа после детандера, Па": data.table_cooled_gas_pressure,
    };
  }
};

export const prepareSepProdData = (data) => {
  if (data) {
    return {
      "Массовый расход паров из сепаратора С-1, кг/ч": data.table_sep_vap_mass_flow,
      "Массовый расход жидкости из сепаратора C-1, кг/ч": data.table_sep_liq_mass_flow,
      "Массовая доля диоксида углерода в парах сепаратора С-1": data.table_sep_vap_co2,
      "Массовая доля азота в парах сепаратора С-1": data.table_sep_vap_n2,
      "Массовая доля метана в парах сепаратора С-1": data.table_sep_vap_ch4,
      "Массовая доля этана в парах сепаратора С-1": data.table_sep_vap_c2h6,
      "Массовая доля пропана в парах сепаратора С-1": data.table_sep_vap_c3h8,
      "Массовая доля и-бутана в парах сепаратора С-1": data.table_sep_vap_ic4h10,
      "Массовая доля н-бутана в парах сепаратора С-1": data.table_sep_vap_nc4h10,
      "Массовая доля и-пентана в парах сепаратора С-1": data.table_sep_vap_ic5h12,
      "Массовая доля н-пентана в парах сепаратора С-1": data.table_sep_vap_nc5h12,
      "Массовая доля диоксида углерода в жидкости сепаратора С-1": data.table_sep_liq_co2,
      "Массовая доля азота в жидкости сепаратора С-1": data.table_sep_liq_n2,
      "Массовая доля метана в жидкости сепаратора С-1": data.table_sep_liq_ch4,
      "Массовая доля этана в жидкости сепаратора С-1": data.table_sep_liq_c2h6,
      "Массовая доля пропана в жидкости сепаратора С-1": data.table_sep_liq_c3h8,
      "Массовая доля и-бутана в жидкости сепаратора С-1": data.table_sep_liq_ic4h10,
      "Массовая доля н-бутана в жидкости сепаратора С-1": data.table_sep_liq_nc4h10,
      "Массовая доля и-пентана в жидкости сепаратора С-1": data.table_sep_liq_ic5h12,
      "Массовая доля н-пентана в жидкости сепаратора С-1": data.table_sep_liq_nc5h12,
    };
  }
};
