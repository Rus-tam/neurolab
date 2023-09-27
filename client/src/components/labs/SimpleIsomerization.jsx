import Reactor from "../../blueprints/simple-isomerization/reactor.svg";
import Blades from "../../blueprints/simple-isomerization/blades.svg";
import "../styles/simple-isomerization.css";
import InputTable from "../layout/InputTable.jsx";
import ResultTable from "../layout/ResultTable.jsx";
import { useSelector } from "react-redux";
import { ParentContext } from "../../utils/ParentContext.js";

const SimpleIsomerization = () => {
  const calculationResults = useSelector((state) => state.simpleIso);
  const initialTableData = [
    { name: "Объем реактора, куб. м.", value: "1" },
    { name: "Расход сырья, кг/ч", value: "200" },
    { name: "Температура сырья, град. Цельсия", value: "25" },
  ];

  return (
    <div className="simple_isomerization">
      <img className="reactor" src={Reactor} alt="reactor" />
      <img className="blades" src={Blades} alt="blades" />

      <span className="note">
        <b>Примечание:</b> <br />
        - Объем реактора может быть задан в пределах от 0.01 куб.м. до 5 куб.м.; <br />
        - Температура сырья может быть задана в пределах от 10 град Цельсия до 50 град Цельсия; <br />-
        Массовый расход сырьевого потока может быть задан в пределах от 200 кг/ч до 50000 кг/ч.
      </span>

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
          <InputTable caption={"Исходные данные"} initialValues={initialTableData} />
        </ParentContext.Provider>
      </div>

      <div className="result-table">
        <ParentContext.Provider value="simple-isomerization">
          <ResultTable caption={"Результаты расчетов"} results={calculationResults} />
        </ParentContext.Provider>
      </div>
    </div>
  );
};

export default SimpleIsomerization;
