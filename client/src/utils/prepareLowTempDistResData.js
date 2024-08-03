export const prepareFeedGasData = (data) => {
  if (data) {
    return {
      "Температура сырьевого газа, град Цельсия": data.table_gas_feed_temperature.toFixed(3),
      "Давление сырьевого газа, Па": data.table_gas_feed_pressure.toFixed(3),
      "Массовая доля метана в сырьевом газе": data.table_gas_feed_ch4_mass_frac.toFixed(3),
      "Массовая доля этана в сырьевом газе": data.table_gas_feed_c2h6_mass_frac.toFixed(3),
      "Массовая доля пропана в сырьевом газе": data.table_gas_feed_c3h8_mass_frac.toFixed(3),
      "Массовая доля и-бутана в сырьевом газе": data.table_gas_feed_ic4h10_mass_frac.toFixed(3),
      "Массовая доля н-бутана в сырьевом газе": data.table_gas_feed_nc4h10_mass_frac.toFixed(3),
      "Массовая доля и-пентана в сырьевом газе": data.table_gas_feed_ic5h12_mass_frac.toFixed(3),
      "Массовая доля н-пентана в сырьевом газе": data.table_gas_feed_ic5h12_mass_frac.toFixed(3),
      "Тепловая нагрузка колонны, кВт": data.table_column_power.toFixed(3),
      "Давление газа после детандера, Па": data.table_stream_3_pressure.toFixed(3),
    };
  }
};

export const prepareSepProdData = (data) => {
  if (data) {
    return {
      "Массовый расход паров из сепаратора С-1, кг/ч": data.table_stream_1_mass_flow.toFixed(3),
      "Массовый расход жидкости из сепаратора C-1, кг/ч": data.table_stream_2_mass_flow.toFixed(3),
      "Массовая доля метана в парах сепаратора С-1": data.table_stream_1_methane_mass_fr.toFixed(3),
      "Массовая доля этана в парах сепаратора С-1": data.table_stream_1_ethane_mass_fr.toFixed(3),
      "Массовая доля пропана в парах сепаратора С-1": data.table_stream_1_propane_mass_fr.toFixed(3),
      "Массовая доля и-бутана в парах сепаратора С-1": data.table_stream_1_i_butane_mass_fr.toFixed(3),
      "Массовая доля н-бутана в парах сепаратора С-1": data.table_stream_1_n_butane_mass_fr.toFixed(3),
      "Массовая доля и-пентана в парах сепаратора С-1": data.table_stream_1_i_pentane_mass_fr.toFixed(3),
      "Массовая доля н-пентана в парах сепаратора С-1": data.table_stream_1_n_pentane_mass_fr.toFixed(3),
      "Массовая доля метана в жидкости сепаратора С-1": data.table_stream_2_methane_mass_fr.toFixed(3),
      "Массовая доля этана в жидкости сепаратора С-1": data.table_stream_2_ethane_mass_fr.toFixed(3),
      "Массовая доля пропана в жидкости сепаратора С-1": data.table_stream_2_propane_mass_fr.toFixed(3),
      "Массовая доля бутанов в жидкости сепаратора С-1": (
        parseFloat(data.table_stream_2_i_butane_mass_fr) + parseFloat(data.table_stream_2_n_butane_mass_fr)
      ).toFixed(3),
      "Массовая доля пентанов в жидкости сепаратора С-1": (
        parseFloat(data.table_stream_2_i_pentane_mass_fr) + parseFloat(data.table_stream_2_n_pentane_mass_fr)
      ).toFixed(3),
    };
  }
};

export const prepareColProdData = (data) => {
  if (data) {
    return {
      "Массовый расход паров с верха колонны, К-1": data.table_stream_16_mass_flow.toFixed(3),
      "Температура паров верха колонны К-1": data.table_stream_16_temperature.toFixed(3),
      "Массовый расход жидкости с низа колонны, К-1": data.table_stream_17_mass_flow.toFixed(3),
      "Температура жидкости с низа колонны, К-1": data.table_stream_17_temperature.toFixed(3),
      "Массовая доля метана в парах верха колонны К-1": data.table_stream_16_methane_mass_fr.toFixed(3),
      "Массовая доля этана в парах верха колонны К-1": data.table_stream_16_ethane_mass_fr.toFixed(3),
      "Массовая доля метана в жидкости низа колонны К-1": data.table_stream_17_methane_mass_fr.toFixed(3),
      "Массовая доля этана в жидкости низа колонны К-1": data.table_stream_17_ethane_mass_fr.toFixed(3),
      "Массовая доля пропана в жидкости низа колонны К-1": data.table_stream_17_propane_mass_fr.toFixed(3),
      "Массовая доля и-бутана в жидкости низа колонны К-1": data.table_stream_17_i_butane_mass_fr.toFixed(3),
      "Массовая доля н-бутана в жидкости низа колонны К-1": data.table_stream_17_n_butane_mass_fr.toFixed(3),
      "Массовая доля и-пентана в жидкости низа колонны К-1":
        data.table_stream_17_i_pentane_mass_fr.toFixed(3),
      "Массовая доля н-пентана в жидкости низа колонны К-1":
        data.table_stream_17_n_pentane_mass_fr.toFixed(3),
    };
  }
};
