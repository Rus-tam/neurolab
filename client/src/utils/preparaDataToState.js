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
          feed_gas_n2: data[0].value,
          feed_gas_co2: data[1].value,
          feed_gas_ch4: data[2].value,
          feed_gas_c2h6: data[3].value,
          feed_gas_c3h8: data[4].value,
          feed_gas_ic4h10: data[5].value,
          feed_gas_nc4h10: data[6].value,
          feed_gas_ic5h12: data[7].value,
          feed_gas_nc5h12: data[8].value,
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
      feed_gas_n2: data.feed_gas_n2,
      feed_gas_co2: data.feed_gas_co2,
      feed_gas_ch4: data.feed_gas_ch4,
      feed_gas_c2h6: data.feed_gas_c2h6,
      feed_gas_c3h8: data.feed_gas_c3h8,
      feed_gas_ic4h10: data.feed_gas_ic4h10,
      feed_gas_nc4h10: data.feed_gas_nc4h10,
      feed_gas_ic5h12: data.feed_gas_ic5h12,
      feed_gas_nc5h12: data.feed_gas_nc5h12,
    };
  }
}
