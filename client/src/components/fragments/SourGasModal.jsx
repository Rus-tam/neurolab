import "../styles/modal.css";
import { useState } from "react";
import { setModalWindowStatus, setSourGasInitialData } from "../../store/slices/amineTreatmentSlice.js";
import { useDispatch } from "react-redux";

const SourGasModal = () => {
  const dispatch = useDispatch();

  const sourGasComposition = [
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
  ];

  const [initialTableData, setInitialTableData] = useState(sourGasComposition);

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
    dispatch(
      setSourGasInitialData({
        sour_gas_co2: initialTableData[0].value,
        sour_gas_ch4: initialTableData[1].value,
        sour_gas_c2h8: initialTableData[2].value,
        sour_gas_c3h8: initialTableData[3].value,
        sour_gas_ic4h10: initialTableData[4].value,
        sour_gas_nc4h10: initialTableData[5].value,
        sour_gas_ic5h12: initialTableData[6].value,
        sour_gas_nc5h12: initialTableData[7].value,
        sour_gas_h2s: initialTableData[8].value,
        sour_gas_h2o: initialTableData[9].value,
      }),
    );
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
