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
          name: "Молярный расход очищенного газа, кгмоль/ч",
          value: results.sweet_gas_mol_flow,
        },
        {
          name: "Молярный расход H2S в очищенном газе, кгмоль/ч",
          value: results.sweet_gas_h2s_mol_flow,
        },
        {
          name: "Молярный расход CO2 в очищенном газе, кгмоль/ч",
          value: results.sweet_gas_co2_mol_flow,
        },
        {
          name: "Молярный вес очищенного газа",
          value: results.sweet_gas_mol_weight,
        },
        {
          name: "Температура насыщенного амина, град. Цельсия",
          value: results.rich_amine_temperature,
        },
        {
          name: "Молярный расход насыщенного амина, кгмоль/x",
          value: results.rich_amine_mol_flow,
        },
        {
          name: "Молярный расход H2S в насыщенном амине, кгмоль/ч",
          value: results.rich_amine_h2s_mol_flow,
        },
        {
          name: "Молярный расход CO2 в насыщенном амине, кгмоль/ч",
          value: results.rich_amine_co2_mol_flow,
        },
        {
          name: "Молярный вес насыщенного амина",
          value: results.rich_amine_mol_weight,
        },
      ];
      break;

    case "low-temp-dist":
      console.log(resultData);
      resultData = [
        {
          name: "Температура верха колонны, град. Цельсия",
          value: results.stream_16_temperature.toFixed(3),
        },
        {
          name: "Температура низа колонны, град. Цельсия",
          value: results.stream_17_temperature.toFixed(3),
        },
        {
          name: "Массовый расход СОГ",
          value: results.stream_16_mass_flow.toFixed(3),
        },
        {
          name: "Массовая доля метана в СОГ",
          value: results.stream_16_methane_mass_fr.toFixed(3),
        },
        {
          name: "Массовая доля этана в СОГ",
          value: results.stream_16_ethane_mass_fr.toFixed(3),
        },
        {
          name: "Массовый расход ШФЛУ",
          value: results.stream_17_mass_flow.toFixed(3),
        },
        {
          name: "Массовая доля метана в ШФЛУ",
          value: results.stream_17_methane_mass_fr.toFixed(3),
        },
        {
          name: "Массовая доля этана в ШФЛУ",
          value: results.stream_17_ethane_mass_fr.toFixed(3),
        },
        {
          name: "Массовая доля пропана в ШФЛУ",
          value: results.stream_17_propane_mass_fr.toFixed(3),
        },
        {
          name: "Массовая доля бутанов в ШФЛУ",
          value: (results.stream_17_n_butane_mass_fr + results.stream_17_i_butane_mass_fr).toFixed(3),
        },
        {
          name: "Массовая доля пентанов в ШФЛУ",
          value: (results.stream_17_n_pentane_mass_fr + results.stream_17_i_pentane_mass_fr).toFixed(3),
        },
        {
          name: "Температура газа после Д-1, град. Цельсия",
          value: results.stream_3_temperature.toFixed(3),
        },
        {
          name: "Мощность Д-1, кВт",
          value: results.expander_power.toFixed(3),
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
