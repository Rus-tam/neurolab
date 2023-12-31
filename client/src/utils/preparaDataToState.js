// export const dataToState = (mode, data) => {
//   switch (mode) {
//     case "sour-gas":
//       return {
//         sour_gas_co2: data[0].value,
//         sour_gas_ch4: data[1].value,
//         sour_gas_c2h8: data[2].value,
//         sour_gas_c3h8: data[3].value,
//         sour_gas_ic4h10: data[4].value,
//         sour_gas_nc4h10: data[5].value,
//         sour_gas_ic5h12: data[6].value,
//         sour_gas_nc5h12: data[7].value,
//         sour_gas_h2s: data[8].value,
//         sour_gas_h2o: data[9].value,
//       };

//       break;

//     default:
//       return null;
//   }
// };

export class DataHandler {
  dataToState(mode, data) {
    switch (mode) {
      case "sour-gas":
        return {
          sour_gas_co2: data[0].value,
          sour_gas_ch4: data[1].value,
          sour_gas_c2h8: data[2].value,
          sour_gas_c3h8: data[3].value,
          sour_gas_ic4h10: data[4].value,
          sour_gas_nc4h10: data[5].value,
          sour_gas_ic5h12: data[6].value,
          sour_gas_nc5h12: data[7].value,
          sour_gas_h2s: data[8].value,
          sour_gas_h2o: data[9].value,
        };
        break;

      case "amine-solution":
        return {
          amine_MDEA: data[0].value,
          amine_h2o: data[1].value,
          amine_co2: data[2].value,
          amine_h2s: data[3].value,
        };
        break;

      case "low-temp-dist":
        return {
          n2_mass_frac: data[0].value,
          co2_mass_frac: data[1].value,
          ch4_mass_frac: data[2].value,
          c2h6_mass_frac: data[3].value,
          c3h8_mass_frac: data[4].value,
          ic4h10_mass_frac: data[5].value,
          nc4h10_mass_frac: data[6].value,
          c5h12_mass_frac: data[7].value,
          c6h14_mass_frac: data[8].value,
          c7h16_mass_frac: data[9].value,
        };
        break;

      default:
        return null;
    }
  }

  sourGasComposition(data) {
    return {
      sour_gas_co2: data.sour_gas_co2,
      sour_gas_ch4: data.sour_gas_ch4,
      sour_gas_c2h8: data.sour_gas_c2h8,
      sour_gas_c3h8: data.sour_gas_c3h8,
      sour_gas_ic4h10: data.sour_gas_ic4h10,
      sour_gas_nc4h10: data.sour_gas_nc4h10,
      sour_gas_ic5h12: data.sour_gas_ic5h12,
      sour_gas_nc5h12: data.sour_gas_nc5h12,
      sour_gas_h2s: data.sour_gas_h2s,
      sour_gas_h2o: data.sour_gas_h2o,
    };
  }

  amineSolutionComposition(data) {
    return {
      amine_MDEA: data.amine_MDEA,
      amine_h2o: data.amine_h2o,
      amine_co2: data.amine_co2,
      amine_h2s: data.amine_h2s,
    };
  }

  low_temp_dist_gas(data) {
    return {
      n2_mass_frac: data.n2_mass_frac,
      co2_mass_frac: data.co2_mass_frac,
      ch4_mass_frac: data.ch4_mass_frac,
      c2h6_mass_frac: data.c2h6_mass_frac,
      c3h8_mass_frac: data.c3h8_mass_frac,
      ic4h10_mass_frac: data.ic4h10_mass_frac,
      nc4h10_mass_frac: data.nc4h10_mass_frac,
      c5h12_mass_frac: data.c5h12_mass_frac,
      c6h14_mass_frac: data.c6h14_mass_frac,
      c7h16_mass_frac: data.c7h16_mass_frac,
    };
  }
}
