import "../styles/low-temp-dist.css";
import "../styles/modal.css";
import LowTempDist from "../../blueprints/low-temperature-dist/low-temperature-dist.svg";
import { ParentContext } from "../../utils/ParentContext.js";
import InputTable from "../layout/InputTable.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setModalWindowStatus } from "../../store/slices/lowTempDistSlice.js";
import LowTempDistModal from "../fragments/LowTempDistModal.jsx";
import ResultTable from "../layout/ResultTable.jsx";

const LowTemperatureDist = () => {
  const calculationResults = useSelector((state) => state.lowTempDist);
  const dispatch = useDispatch();
  const { lowTempDistModalStatus } = useSelector((state) => state.lowTempDist);

  const feedGasData = [
    { name: "Температура газа, град. Цельсия", value: calculationResults.gas_feed_temperature },
    { name: "Массовый расход газа, кг/ч", value: calculationResults.gas_feed_mass_flow },
    { name: "Давление газа, Па", value: calculationResults.gas_feed_pressure },
    { name: "Давление газа после Д-1, Па", value: calculationResults.stream_3_pressure },
    { name: "Массовая доля метана и этана в ШФЛУ", value: calculationResults.comp_frac },
  ];

  const handleOpenGasCompModal = () => {
    dispatch(
      setModalWindowStatus({
        lowTempDistModalStatus: true,
      }),
    );
  };

  return (
    <div className="low-temp-dist">
      <img className="low-temp-dist-unit" src={LowTempDist} alt="low-temp-dist-unit" />

      <div className="input-table">
        <ParentContext.Provider value="low-temp-dist">
          <InputTable caption={"Низкотемпературная ректификация"} initialValues={feedGasData} />
        </ParentContext.Provider>
      </div>

      <button className="gas-composition" onClick={handleOpenGasCompModal}>
        Состав газа
      </button>

      <div className="result-table">
        <ParentContext.Provider value="low-temp-dist">
          <ResultTable caption={"Результаты расчетов"} results={calculationResults} />
        </ParentContext.Provider>
      </div>

      {lowTempDistModalStatus && (
        <div className="modal">
          <div className="modal-content">
            <LowTempDistModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default LowTemperatureDist;
