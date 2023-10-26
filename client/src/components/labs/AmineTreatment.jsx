import AmineAbsorber from "../../blueprints/amine-treatment/amine-treatment.svg";
import "../styles/amine-treatment.css";
import "../styles/modal.css";
import { ParentContext } from "../../utils/ParentContext.js";
import InputTable from "../layout/InputTable.jsx";
import { useState } from "react";
import SourGasModal from "../fragments/SourGasModal.jsx";

const AmineTreatment = () => {
  const [isOpenSGComp, setIsOpenSGComp] = useState(false);

  const feedGasAmineData = [
    { name: "Температура кислого газа, град. Цельсия", value: "20" },
    { name: "Массовый расход кислого газа, кг/ч", value: "10000" },
    { name: "Мольная доля диоксида углерода в газе", value: "0.02" },
    { name: "Мольная доля метана в газе", value: "0.55" },
    { name: "Мольная доля этана в газе", value: "0.1" },
    { name: "Мольная доля пропана в газе", value: "0.05" },
    { name: "Мольная доля и-бутана в газе", value: "0.05" },
    { name: "Мольная доля н-бутана в газе", value: "0.05" },
    { name: "Мольная доля и-пентан в газе", value: "0.025" },
    { name: "Мольная доля н-пентан в газе", value: "0.005" },
    { name: "Мольная доля сероводорода в газе", value: "0.02" },
    { name: "Мольная доля воды в газе", value: "0.001" },
    { name: "Температура раствора амина, град. Цельсия", value: "20" },
    { name: "Массовый расход раствора амина, кг/ч", value: "1000" },
    { name: "Мольная доля диоксида углерода в растворе амина", value: "0.0025" },
    { name: "Мольная доля сероводорода в растворе амина", value: "0.0002" },
    { name: "Мольная доля воды в растворе амина", value: "0.85" },
    { name: "Мольная доля МДЭА в растворе амина", value: "0.25" },
  ];

  const handleOpenSGCompModal = () => {
    setIsOpenSGComp(true);
  };

  const handleCloseSGCompModal = () => {
    setIsOpenSGComp(false);
  };

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
        <ParentContext.Provider value="amine-treatment">
          <InputTable caption={"Аминовая очистка"} initialValues={feedGasAmineData} />
        </ParentContext.Provider>

        <button className="sour-gas-composition" onClick={handleOpenSGCompModal}>
          Состав газа
        </button>

        <button className="amine-composition">Состав амина</button>
      </div>

      {isOpenSGComp && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseSGCompModal}>
              &times;
            </span>
            <SourGasModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default AmineTreatment;
