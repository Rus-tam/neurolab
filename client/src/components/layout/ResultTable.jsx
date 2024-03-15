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
          value: -9,
        },
        {
          name: "Температура низа колонны, град. Цельсия",
          value: 24,
        },
        {
          name: "Массовая доля метана в СОГ",
          value: 0.95,
        },
        {
          name: "Массовая доля этана в СОГ",
          value: 0.02,
        },
        {
          name: "Массовая доля метана в ШФЛУ",
          value: 0.001,
        },
        {
          name: "Массовая доля этана в ШФЛУ",
          value: 0.002,
        },
        {
          name: "Массовая доля пропана в ШФЛУ",
          value: 0.15,
        },
        {
          name: "Массовая доля бутанов в ШФЛУ",
          value: 0.3,
        },
        {
          name: "Массовая доля пентана в ШФЛУ",
          value: 0.15,
        },
        {
          name: "Температура газа после Д-1, град. Цельсия",
          value: -90,
        },
        {
          name: "Мощность Д-1, МВт",
          value: 12,
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
