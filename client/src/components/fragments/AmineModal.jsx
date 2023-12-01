import "../styles/modal.css";
import { useState } from "react";
import { setAmineModalWindowStatus, setAmineInitialData } from "../../store/slices/amineTreatmentSlice.js";
import { useDispatch } from "react-redux";
import { DataHandler } from "../../utils/preparaDataToState.js";
import { useSelector } from "react-redux";
import { Normalize } from "../../utils/normalize.js";
import { toast } from "react-toastify";

const AmineModel = () => {
  const dataHandler = new DataHandler();
  const dispatch = useDispatch();

  const storedData = useSelector((state) => state.amineTreatment);

  const [initialTableData, setInitialTableData] = useState([
    { name: "Мольная доля MDEA в аминовом растворе", value: storedData.amine_MDEA },
    { name: "Мольная доля воды в аминовом растворе", value: storedData.amine_h2o },
    { name: "Мольная доля углекислого газа в аминовом растворе", value: storedData.amine_co2 },
    { name: "Мольная доля сероводорода в аминовом растворе", value: storedData.amine_h2s },
  ]);

  const handleCellValueChange = (index, value) => {
    if (value > 1) {
      toast.error("Мольная доля компонента не может быть больше 1");
    } else if (value < 0) {
      toast.error("Мольная доля компонента не может быть отрицательной");
    } else {
      const updatedData = [...initialTableData];
      updatedData[index].value = value;
      setInitialTableData(updatedData);
      const amineSolutionComp = dataHandler.dataToState("amine-solution", initialTableData);
      dispatch(setAmineInitialData(amineSolutionComp));
    }
  };

  const handleNormalize = () => {
    const normalizer = new Normalize(dataHandler.amineSolutionComposition(storedData));
    const normalizedComp = normalizer.normalizeData();
    dispatch(setAmineInitialData(normalizedComp));
    setInitialTableData([
      { name: "Мольная доля MDEA в аминовом растворе", value: storedData.amine_MDEA },
      { name: "Мольная доля воды в аминовом растворе", value: storedData.amine_h2o },
      { name: "Мольная доля углекислого газа в аминовом растворе", value: storedData.amine_co2 },
      { name: "Мольная доля сероводорода в аминовом растворе", value: storedData.amine_h2s },
    ]);
    toast.info("Составы были нормализованы");
  };

  const handleCloseSGCompModal = () => {
    dispatch(
      setAmineModalWindowStatus({
        modalAmineWindowStatus: false,
      }),
    );
    handleNormalize();
  };

  return (
    <div>
      <div className="sour-gas-comp-modal">
        <h2>Введите состав раствора амина</h2>

        <table className="table">
          <tbody>
            {initialTableData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>
                  <input
                    type="number"
                    maxLength={6}
                    value={row.value}
                    required
                    onChange={(e) => handleCellValueChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="buttons">
          <button onClick={handleNormalize}>Нормализовать</button>
          <button onClick={handleCloseSGCompModal}>Закрыть</button>
        </div>
      </div>
    </div>
  );
};

export default AmineModel;
