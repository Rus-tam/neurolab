import { useContext } from "react";
import { ParentContext } from "../../utils/ParentContext.js";

const ResultTable = ({ caption, results }) => {
  const parentComponentName = useContext(ParentContext);

  let resultData;

  switch (parentComponentName) {
    case "simple-isomerization":
      resultData = [
        {
          name: "Концентрация транс-бутена в продукте, % масс.",
          value: results.product_concentration,
        },
        {
          name: "Температура продукта, град. Цельсия",
          value: results.product_temperature,
        },
      ];
      break;

    case "amine-treatment":
      resultData = [
        {
          name: "Температура очищенного газа, град. Цельсия",
          value: results.sweet_gas_temperature,
        },
        {
          name: "Массовый расход очищенного газа, кг/ч",
          value: results.sweet_gas_mass_flow,
        },
        {
          name: "Концентрация H2S в очищенном газе, ppm",
          value: results.sweet_gas_h2s_ppm,
        },
        {
          name: "Концентрация CO2 в очищенном газе, ppm",
          value: results.sweet_gas_co2_ppm,
        },
        {
          name: "Температура насыщенного амина, град. Цельсия",
          value: results.rich_amine_temperature,
        },
        {
          name: "Массовый расход насыщенного амина, кг/ч",
          value: results.rich_amine_mass_flow,
        },
        {
          name: "Мольная доля H2S в насыщенном амине",
          value: results.rich_amine_h2s,
        },
        {
          name: "Мольная доля CO2 в насыщенном амине",
          value: results.rich_amine_co2,
        },
        {
          name: "Мольная доля H2O в насыщенном амине",
          value: results.rich_amine_h2o,
        },
        {
          name: "Мольная доля MDEA в насыщенном амине",
          value: results.rich_amine_MDEA,
        },
      ];
      break;

    case "low-temp-dist":
      resultData = [
        {
          name: "Температура верха колонны, град. Цельсия",
          value: results.column_top_prod_temp,
        },
        {
          name: "Температура низа колонны, град. Цельсия",
          value: results.column_bot_prod_temp,
        },
        {
          name: "Массовый расход СОГ",
          value: "Внести данные",
        },
        {
          name: "Массовая доля метана в СОГ",
          value: results.col_bot_ch4,
        },
        {
          name: "Массовая доля этана в СОГ",
          value: results.col_top_c2h6,
        },
        {
          name: "Массовый расход ШФЛУ",
          value: "Внести данные",
        },
        {
          name: "Массовая доля метана в ШФЛУ",
          value: results.col_bot_ch4,
        },
        {
          name: "Массовая доля этана в ШФЛУ",
          value: results.col_bot_c2h6,
        },
        {
          name: "Массовая доля пропана в ШФЛУ",
          value: results.col_bot_c3h8,
        },
        {
          name: "Массовая доля бутанов в ШФЛУ",
          value: results.col_bot_ic4h10 + results.col_bot_nc4h10,
        },
        {
          name: "Массовая доля пентанов в ШФЛУ",
          value: results.col_bot_ic5h12 + results.col_bot_nc5h12,
        },
        {
          name: "Температура газа после Д-1, град. Цельсия",
          value: results.cooled_gas_temperature,
        },
        {
          name: "Мощность Д-1, кВт",
          value: results.expander_power,
        },
      ];
      break;

    default:
      return null;
  }

  return (
    <div className="table-container">
      <table className="table">
        <caption>{caption}</caption>
        <tbody>
          {resultData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
