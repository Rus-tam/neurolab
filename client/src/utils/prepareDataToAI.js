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
        // sweet_gas_temperature: parseFloat(data.sweet_gas_temperature),
        // rich_amine_temperature: parseFloat(data.rich_amine_temperature),
        // sweet_gas_mass_flow: parseFloat(data.sweet_gas_mass_flow),
        // rich_amine_mass_flow: parseFloat(data.rich_amine_mass_flow),
        // feed_gas_mol_weight: parseFloat(data.feed_gas_mol_weight),
        // lean_amine_mol_weight: parseFloat(data.lean_amine_mol_weight),
        // rich_amine_mol_weight: parseFloat(data.rich_amine_mol_weight),
        // sweet_gas_mol_weight: parseFloat(data.sweet_gas_mol_weight),
        // feed_gas_mol_flow: parseFloat(data.feed_gas_mol_weight),
        // feed_gas_H2S_mol_flow: parseFloat(data.feed_gas_H2S_mol_flow),
        // feed_gas_CO2_mol_flow: parseFloat(data.feed_gas_CO2_mol_flow),
        // lean_amine_mol_flow: parseFloat(data.lean_amine_mol_flow),
        // lean_amine_H2S_mol_flow: parseFloat(data.lean_amine_H2S_mol_flow),
        // lean_amine_CO2_mol_flow: parseFloat(data.lean_amine_CO2_mol_flow),
        // rich_amine_mol_flow: parseFloat(data.rich_amine_mol_flow),
        // sweet_gas_mol_flow: parseFloat(data.sweet_gas_mol_flow),
      };
      break;

    case "low-temp-dist":
      return {
        gas_feed_temperature: parseFloat(data.gas_feed_temperature),
        gas_feed_pressure: parseFloat(data.gas_feed_pressure),
        gas_feed_mass_flow: parseFloat(data.gas_feed_mass_flow),
        gas_feed_ch4_mass_frac: parseFloat(data.gas_feed_ch4_mass_frac),
        gas_feed_c2h6_mass_frac: parseFloat(data.gas_feed_c2h6_mass_frac),
        gas_feed_c3h8_mass_frac: parseFloat(data.gas_feed_c3h8_mass_frac),
        gas_feed_ic4h10_mass_frac: parseFloat(data.gas_feed_ic4h10_mass_frac),
        gas_feed_nc4h10_mass_frac: parseFloat(data.gas_feed_nc4h10_mass_frac),
        gas_feed_ic5h12_mass_frac: parseFloat(data.gas_feed_ic5h12_mass_frac),
        gas_feed_nc5h12_mass_frac: parseFloat(data.gas_feed_nc5h12_mass_frac),
        comp_frac: parseFloat(data.comp_frac),
        stream_3_pressure: parseFloat(data.stream_3_pressure),
      };
      break;
  }
};
