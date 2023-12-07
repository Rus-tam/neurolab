import "../styles/low-temp-dist.css";
import LowTempDist from "../../blueprints/low-temperature-dist/low-temperature-dist.svg";
import { ParentContext } from "../../utils/ParentContext.js";
import InputTable from "../layout/InputTable.jsx";

const LowTemperatureDist = () => {
  const feedGasData = [
    { name: "Температура газа, град. Цельсия", value: "20" },
    { name: "Массовый расход газа, кг/ч", value: "10000" },
    { name: "Массовая доля азота", value: "0.001" },
    { name: "Массовая доля метана", value: "0.65" },
    { name: "Массовая доля этана", value: "0.21" },
    { name: "Массовая доля пропана", value: "0.025" },
    { name: "Массовая доля и-бутана", value: "0.01" },
    { name: "Массовая доля н-бутана", value: "0.012" },
    { name: "Массовая доля пентана", value: "0.092" },
  ];

  return (
    <div className="low-temp-dist">
      <img className="low-temp-dist-unit" src={LowTempDist} alt="low-temp-dist-unit" />

      <div className="input-table">
        <ParentContext.Provider value="low-temp-dist">
          <InputTable caption={"Низкотемпературная ректификация"} initialValues={feedGasData} />
        </ParentContext.Provider>
      </div>
    </div>
  );
};

export default LowTemperatureDist;
