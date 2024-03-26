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
