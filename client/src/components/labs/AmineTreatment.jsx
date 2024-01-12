import AmineAbsorber from "../../blueprints/amine-treatment/amine-treatment.svg";
import "../styles/amine-treatment.css";
import "../styles/modal.css";
import { ParentContext } from "../../utils/ParentContext.js";
import InputTable from "../layout/InputTable.jsx";
import SourGasModal from "../fragments/SourGasModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { setSGModalWindowStatus, setAmineModalWindowStatus } from "../../store/slices/amineTreatmentSlice.js";
import AmineModel from "../fragments/AmineModal.jsx";
import ResultTable from "../layout/ResultTable.jsx";

const AmineTreatment = () => {
  const calculationResults = useSelector((state) => state.amineTreatment);
  const dispatch = useDispatch();
  const { modalSGWindowStatus, modalAmineWindowStatus } = useSelector((state) => state.amineTreatment);

  const feedGasAmineData = [
    { name: "Температура кислого газа, град. Цельсия", value: "20" },
    { name: "Массовый расход кислого газа, кг/ч", value: "10000" },
    { name: "Температура раствора амина, град. Цельсия", value: "20" },
    { name: "Массовый расход раствора амина, кг/ч", value: "1000" },
  ];

  const handleOpenSGCompModal = () => {
    dispatch(
      setSGModalWindowStatus({
        modalSGWindowStatus: true,
      }),
    );
  };

  const handleOpenAmineCompModal = () => {
    dispatch(
      setAmineModalWindowStatus({
        modalAmineWindowStatus: true,
      }),
    );
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
      </div>

      <button className="sour-gas-composition" onClick={handleOpenSGCompModal}>
        Состав газа
      </button>

      <button className="amine-composition" onClick={handleOpenAmineCompModal}>
        Состав амина
      </button>

      <div className="result-table">
        <ParentContext.Provider value="amine-treatment">
          <ResultTable caption={"Результаты расчетов"} results={calculationResults} />
        </ParentContext.Provider>
      </div>

      {modalSGWindowStatus && (
        <div className="modal">
          <div className="modal-content">
            <SourGasModal />
          </div>
        </div>
      )}

      {modalAmineWindowStatus && (
        <div className="modal">
          <div className="modal-content">
            <AmineModel />
          </div>
        </div>
      )}
    </div>
  );
};

export default AmineTreatment;
