export const prepareDataToAI = (data, mode) => {
  switch (mode) {
    case "simple-isomerization":
      return {
        vessel_volume: parseFloat(data.vessel_volume),
        feed_temperature: parseFloat(data.feed_temperature),
        feed_mass_flow: parseFloat(data.feed_mass_flow),
      };
      break;
    case "amine-treatment":
      return {
        sour_gas_temperature: parseFloat(data.sour_gas_temperature),
        sour_gas_mass_flow: parseFloat(data.sour_gas_mass_flow),
        sour_gas_pressure: parseFloat(data.sour_gas_pressure),
        sour_gas_co2: parseFloat(data.sour_gas_co2),
        sour_gas_ch4: parseFloat(data.sour_gas_ch4),
        sour_gas_c2h8: parseFloat(data.sour_gas_c2h8),
        sour_gas_c3h8: parseFloat(data.sour_gas_c3h8),
        sour_gas_ic4h10: parseFloat(data.sour_gas_ic4h10),
        sour_gas_nc4h10: parseFloat(data.sour_gas_nc4h10),
        sour_gas_ic5h12: parseFloat(data.sour_gas_ic5h12),
        sour_gas_nc5h12: parseFloat(data.sour_gas_nc5h12),
        sour_gas_h2s: parseFloat(data.sour_gas_h2s),
        sour_gas_h2o: parseFloat(data.sour_gas_h2o),
        sour_gas_MDEA: parseFloat(data.sour_gas_MDEA),
        amine_temperature: parseFloat(data.amine_temperature),
        amine_mass_flow: parseFloat(data.amine_mass_flow),
        amine_pressure: parseFloat(data.amine_pressure),
        amine_co2: parseFloat(data.amine_co2),
        amine_ch4: parseFloat(data.amine_ch4),
        amine_c2h8: parseFloat(data.amine_c2h8),
        amine_c3h8: parseFloat(data.amine_c3h8),
        amine_ic4h10: parseFloat(data.amine_ic4h10),
        amine_nch4h10: parseFloat(data.amine_nch4h10),
        amine_ic5h12: parseFloat(data.amine_ic5h12),
        amine_nc5h12: parseFloat(data.amine_nc5h12),
        amine_h2s: parseFloat(data.amine_h2s),
        amine_h2o: parseFloat(data.amine_h2o),
        amine_MDEA: parseFloat(data.amine_MDEA),
        sweet_gas_temperature: parseFloat(data.sweet_gas_temperature),
        rich_amine_temperature: parseFloat(data.rich_amine_temperature),
        sweet_gas_mass_flow: parseFloat(data.sweet_gas_mass_flow),
        rich_amine_mass_flow: parseFloat(data.rich_amine_mass_flow),
        feed_gas_mol_weight: parseFloat(data.feed_gas_mol_weight),
        lean_amine_mol_weight: parseFloat(data.lean_amine_mol_weight),
        rich_amine_mol_weight: parseFloat(data.rich_amine_mol_weight),
        sweet_gas_mol_weight: parseFloat(data.sweet_gas_mol_weight),
        feed_gas_mol_flow: parseFloat(data.feed_gas_mol_weight),
        feed_gas_H2S_mol_flow: parseFloat(data.feed_gas_H2S_mol_flow),
        feed_gas_CO2_mol_flow: parseFloat(data.feed_gas_CO2_mol_flow),
        lean_amine_mol_flow: parseFloat(data.lean_amine_mol_flow),
        lean_amine_H2S_mol_flow: parseFloat(data.lean_amine_H2S_mol_flow),
        lean_amine_CO2_mol_flow: parseFloat(data.lean_amine_CO2_mol_flow),
        rich_amine_mol_flow: parseFloat(data.rich_amine_mol_flow),
        sweet_gas_mol_flow: parseFloat(data.sweet_gas_mol_flow),
      };
      break;

    case "low-temp-dist":
      return {
        feed_gas_temperature: parseFloat(data.feed_gas_temperature),
        feed_gas_mass_flow: parseFloat(data.feed_gas_mass_flow),
        feed_gas_pressure: parseFloat(data.feed_gas_pressure),
        cooled_gas_pressure: parseFloat(data.cooled_gas_pressure),
        column_power: parseFloat(data.column_power),
        feed_gas_n2: parseFloat(data.feed_gas_n2),
        feed_gas_co2: parseFloat(data.feed_gas_co2),
        feed_gas_ch4: parseFloat(data.feed_gas_ch4),
        feed_gas_c2h6: parseFloat(data.feed_gas_c2h6),
        feed_gas_c3h8: parseFloat(data.feed_gas_c3h8),
        feed_gas_ic4h10: parseFloat(data.feed_gas_ic4h10),
        feed_gas_nc4h10: parseFloat(data.feed_gas_nc4h10),
        feed_gas_ic5h12: parseFloat(data.feed_gas_ic5h12),
        feed_gas_nc5h12: parseFloat(data.feed_gas_nc5h12),
        sep_vap_mass_flow: parseFloat(data.sep_vap_mass_flow),
        sep_liq_mass_flow: parseFloat(data.sep_liq_mass_flow),
        sep_vap_ch4: parseFloat(data.sep_vap_ch4),
        sep_vap_c2h6: parseFloat(data.sep_vap_c2h6),
        sep_vap_c3h8: parseFloat(data.sep_vap_c3h8),
        sep_vap_ic4h10: parseFloat(data.sep_vap_ic4h10),
        sep_vap_nc4h10: parseFloat(data.sep_vap_nc4h10),
        sep_vap_ic5h12: parseFloat(data.sep_vap_ic5h12),
        sep_vap_nc5h12: parseFloat(data.sep_vap_nc5h12),
        sep_liq_ch4: parseFloat(data.sep_liq_ch4),
        sep_liq_c2h6: parseFloat(data.sep_liq_c2h6),
        sep_liq_c3h8: parseFloat(data.sep_liq_c3h8),
        sep_liq_ic4h10: parseFloat(data.sep_liq_ic4h10),
        sep_liq_nc4h10: parseFloat(data.sep_liq_nc4h10),
        sep_liq_ic5h12: parseFloat(data.sep_liq_ic5h12),
        sep_liq_nc5h12: parseFloat(data.sep_liq_nc5h12),
        cooled_gas_temperature: parseFloat(data.cooled_gas_temperature),
        expander_power: parseFloat(data.expander_power),
        column_bot_prod_temp: parseFloat(data.column_bot_prod_temp),
        column_top_prod_temp: parseFloat(data.column_top_prod_temp),
        column_top_prod_mass_flow: parseFloat(data.column_top_prod_mass_flow),
        column_bot_prod_mass_flow: parseFloat(data.column_bot_prod_mass_flow),
        col_top_ch4: parseFloat(data.col_top_ch4),
        col_top_c2h6: parseFloat(data.col_top_c2h6),
        col_top_c3h8: parseFloat(data.col_top_c3h8),
        col_top_ic4h10: parseFloat(data.col_top_ic4h10),
        col_top_nc4h10: parseFloat(data.col_top_nc4h10),
        col_top_ic5h12: parseFloat(data.col_top_ic5h12),
        col_top_nc5h12: parseFloat(data.col_top_nc5h12),
        col_bot_ch4: parseFloat(data.col_bot_ch4),
        col_bot_c2h6: parseFloat(data.col_bot_c2h6),
        col_bot_c3h8: parseFloat(data.col_bot_c3h8),
        col_bot_ic4h10: parseFloat(data.col_bot_ic4h10),
        col_bot_nc4h10: parseFloat(data.col_bot_nc4h10),
        col_bot_ic5h12: parseFloat(data.col_bot_ic5h12),
        col_bot_nc5h12: parseFloat(data.col_bot_nc5h12),
      };
      break;
  }
};
