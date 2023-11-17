import "../styles/modal.css";
import { useState } from "react";
import { setModalWindowStatus, setSourGasInitialData } from "../../store/slices/amineTreatmentSlice.js";
import { useDispatch } from "react-redux";
import { dataToState } from "../../utils/preparaDataToState.js";

const SourGasModal = () => {
  const dispatch = useDispatch();

  const [initialTableData, setInitialTableData] = useState([
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
  ]);

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
    const sourGasComp = dataToState("sour-gas", initialTableData);
    dispatch(setSourGasInitialData(sourGasComp));
  };

  const handleCloseSGCompModal = () => {
    dispatch(
      setModalWindowStatus({
        modalWindowStatus: false,
      }),
    );
  };

  return (
    <div className="sour-gas-comp-modal">
      <h2>Введите состав кислого газа</h2>

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
        <button>Нормализовать</button>
        <button onClick={handleCloseSGCompModal}>Закрыть</button>
      </div>
    </div>
  );
};

export default SourGasModal;
