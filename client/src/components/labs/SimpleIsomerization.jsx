import Reactor from "../../blueprints/simple-isomerization/reactor.svg";
import Blades from "../../blueprints/simple-isomerization/blades.svg";
import "../styles/simple-isomerization.css";
import InputTableComponent from "../layout/InputTableComponent.jsx";
import ResultTableComponent from "../layout/ResultTableComponent.jsx";
import React from "react";

export const ParentContext = React.createContext();

const SimpleIsomerization = () => {
  const initialTableData = [
    { name: "Объем реактора, куб. м.", value: "1" },
    { name: "Расход сырья, кг/ч", value: "200" },
    { name: "Температура сырья, град. Цельсия", value: "25" },
  ];

  return (
    <div className="simple_isomerization">
      <img className="reactor" src={Reactor} alt="reactor" />
      <img className="blades" src={Blades} alt="blades" />

      <div className="bubbles_container">
        <div className="bubbles">
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 16 }}></span>
        </div>
      </div>

      <div className="input-table">
        <ParentContext.Provider value="simple-isomerization">
          <InputTableComponent
            caption={"Исходные данные"}
            initialValues={initialTableData}
          />
        </ParentContext.Provider>
      </div>

      <div className="result-table">
        <ResultTableComponent caption={"Результаты расчетов"} />
      </div>
    </div>
  );
};

export default SimpleIsomerization;
