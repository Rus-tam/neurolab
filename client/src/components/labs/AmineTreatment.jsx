import AmineAbsorber from "../../blueprints/amine-treatment/amine-treatment.svg";
import "../styles/amine-treatment.css";
import { ParentContext } from "../../utils/ParentContext.js";
import InputTable from "../layout/InputTable.jsx";

const AmineTreatment = () => {
  const feedGasAmineData = [
    { name: "Температура кислого газа, град. Цельсия", value: "20" },
    { name: "Массовый расход кислого газа, кг/ч", value: "10000" },
    { name: "Мольная доля диоксида углерода в газе", value: "0.1" },
    { name: "Мольная доля метана в газе", value: "0.1" },
    { name: "Мольная доля этана в газе", value: "0.1" },
    { name: "Мольная доля пропана в газе", value: "0.1" },
    { name: "Мольная доля и-бутана в газе", value: "0.1 " },
    { name: "Мольная доля н-бутана в газе", value: "0.1" },
    { name: "Мольная доля и-пентан в газе", value: "0.1" },
    { name: "Мольная доля н-пентан в газе", value: "0.1" },
    { name: "Мольная доля сероводорода в газе", value: "0.1" },
    { name: "Мольная доля воды в газе", value: "0.1" },
    { name: "Температура амина, град. Цельсия", value: "20" },
    { name: "Массовый расход амина, кг/ч", value: "1000" },
    { name: "Мольная доля диоксида углерода в амине", value: "0.1" },
    { name: "Мольная доля сероводорода в амине", value: "0.1" },
    { name: "Мольная доля воды в амине", value: "0.1" },
    { name: "Мольная доля МДЭА в амине", value: "0.1" },
  ];

  return (
    <div className="amine_treatment">
      <img className="amine_absorber" src={AmineAbsorber} alt="amine-absorber" />

      <div className="container">
        <div className="vapour-container">
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 16 }}></span>
        </div>
        <div className="liquid-container">
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 15 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 19 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 17 }}></span>
        </div>
      </div>

      <div className="input-table">
        <ParentContext.Provider value="simple-isomerization">
          {/*<InputTable caption={"Кислый газ"} initialValues={feedGasData} />*/}
          {/*<InputTable caption={"Исходные данные"} initialValues={amineData} />*/}
        </ParentContext.Provider>
      </div>
    </div>
  );
};

export default AmineTreatment;
