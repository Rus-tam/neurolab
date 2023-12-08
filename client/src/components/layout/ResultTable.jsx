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
          value: 21,
        },
        {
          name: "Массовый расход очищенного газа, кг/ч",
          value: 9998,
        },
        {
          name: "Мольная доля H2S в очищенном газе",
          value: 0.0002,
        },
        {
          name: "Мольная доля CO2 в очищенном газе",
          value: 0.00001,
        },
        {
          name: "Температура насыщенного амина, град. Цельсия",
          value: 24,
        },
        {
          name: "Массовый расход насыщенного амина, кг/ч",
          value: 1002,
        },
        {
          name: "Мольная доля H2S в насыщенном амине",
          value: 0.034,
        },
        {
          name: "Мольная доля CO2 в насыщенном амине",
          value: 0.012,
        },
        {
          name: "Мольная доля H2O в насыщенном амине",
          value: 0.85,
        },
        {
          name: "Мольная доля MDEA в насыщенном амине",
          value: 0.14,
        },
      ];
      break;

    case "low-temp-dist":
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
