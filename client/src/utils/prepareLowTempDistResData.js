export const prepareFeedGasData = (data) => {
  if (data) {
    return {
      "Температура сырьевого газа, град Цельсия": data.table_feed_gas_temperature,
      "Давление сырьевого газа, Па": data.table_feed_gas_pressure,
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
      "Массовая доля метана в парах сепаратора С-1": data.table_sep_vap_ch4,
      "Массовая доля этана в парах сепаратора С-1": data.table_sep_vap_c2h6,
      "Массовая доля пропана в парах сепаратора С-1": data.table_sep_vap_c3h8,
      "Массовая доля и-бутана в парах сепаратора С-1": data.table_sep_vap_ic4h10,
      "Массовая доля н-бутана в парах сепаратора С-1": data.table_sep_vap_nc4h10,
      "Массовая доля и-пентана в парах сепаратора С-1": data.table_sep_vap_ic5h12,
      "Массовая доля н-пентана в парах сепаратора С-1": data.table_sep_vap_nc5h12,
      "Массовая доля метана в жидкости сепаратора С-1": data.table_sep_liq_ch4,
      "Массовая доля этана в жидкости сепаратора С-1": data.table_sep_liq_c2h6,
      "Массовая доля пропана в жидкости сепаратора С-1": data.table_sep_liq_c3h8,
      "Массовая доля бутанов в жидкости сепаратора С-1": (
        parseFloat(data.table_sep_liq_ic4h10) + parseFloat(data.table_sep_liq_nc4h10)
      ).toFixed(5),
      "Массовая доля пентанов в жидкости сепаратора С-1": (
        parseFloat(data.table_sep_liq_ic5h12) + parseFloat(data.table_sep_liq_nc5h12)
      ).toFixed(5),
    };
  }
};

export const prepareColProdData = (data) => {
  if (data) {
    return {
      "Массовый расход паров с верха колонны, К-1": data.table_column_top_prod_mass_flow,
      "Температура паров верха колонны К-1": data.table_column_top_prod_temp,
      "Массовый расход жидкости с низа колонны, К-1": data.table_column_bot_prod_mass_flow,
      "Температура жидкости с низа колонны, К-1": data.table_column_bot_prod_temp,
      "Массовая доля метана в парах верха колонны К-1": data.table_col_top_ch4,
      "Массовая доля этана в парах верха колонны К-1": data.table_col_top_c2h6,
      "Массовая доля метана в жидкости низа колонны К-1": data.table_col_bot_ch4,
      "Массовая доля этана в жидкости низа колонны К-1": data.table_col_bot_c2h6,
      "Массовая доля пропана в жидкости низа колонны К-1": data.table_col_bot_c3h8,
      "Массовая доля и-бутана в жидкости низа колонны К-1": data.table_col_bot_ic4h10,
      "Массовая доля н-бутана в жидкости низа колонны К-1": data.table_col_bot_nc4h10,
      "Массовая доля и-пентана в жидкости низа колонны К-1": data.table_col_bot_ic5h12,
      "Массовая доля н-пентана в жидкости низа колонны К-1": data.table_col_bot_nc5h12,
    };
  }
};
