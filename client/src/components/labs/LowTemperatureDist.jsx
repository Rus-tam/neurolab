import "../styles/low-temp-dist.css";
import LowTempDist from "../../blueprints/low-temperature-dist/low-temperature-dist.svg";
import { ParentContext } from "../../utils/ParentContext.js";
import InputTable from "../layout/InputTable.jsx";

const LowTemperatureDist = () => {
  const feedGasData = [
    { name: "Температура газа, град. Цельсия", value: "20" },
    { name: "Массовый расход газа, кг/ч", value: "10000" },
    { name: "Давление газа, МПа", value: "4.4" },
    { name: "Давление колонны, МПа", value: "3.699" },
    { name: "Давление газа после Д-1, МПа", value: "0.02" },
    { name: "Тепловая нагрузка Т-1, МДж", value: "5.5" },
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
