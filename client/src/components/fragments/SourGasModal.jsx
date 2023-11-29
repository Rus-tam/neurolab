import "../styles/modal.css";
import { useEffect, useState } from "react";
import { setModalWindowStatus, setSourGasInitialData } from "../../store/slices/amineTreatmentSlice.js";
import { useDispatch } from "react-redux";
import { DataHandler } from "../../utils/preparaDataToState.js";
import { useSelector } from "react-redux";
import { Normalize } from "../../utils/normalize.js";
import { toast } from "react-toastify";

const SourGasModal = () => {
  const dataHandler = new DataHandler();
  const dispatch = useDispatch();

  const storedData = useSelector((state) => state.amineTreatment);

  const [initialTableData, setInitialTableData] = useState([
    { name: "Мольная доля диоксида углерода в газе", value: storedData.sour_gas_co2 },
    { name: "Мольная доля метана в газе", value: storedData.sour_gas_ch4 },
    { name: "Мольная доля этана в газе", value: storedData.sour_gas_c2h8 },
    { name: "Мольная доля пропана в газе", value: storedData.sour_gas_c3h8 },
    { name: "Мольная доля и-бутана в газе", value: storedData.sour_gas_ic4h10 },
    { name: "Мольная доля н-бутана в газе", value: storedData.sour_gas_nc4h10 },
    { name: "Мольная доля и-пентан в газе", value: storedData.sour_gas_ic5h12 },
    { name: "Мольная доля н-пентан в газе", value: storedData.sour_gas_nc5h12 },
    { name: "Мольная доля сероводорода в газе", value: storedData.sour_gas_h2s },
    { name: "Мольная доля воды в газе", value: storedData.sour_gas_h2o },
  ]);

  const [compValueSumm, setComponentValueSumm] = useState(1);

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
    const sourGasComp = dataHandler.dataToState("sour-gas", initialTableData);
    dispatch(setSourGasInitialData(sourGasComp));
  };

  const handleNormalize = () => {
    const normalizer = new Normalize(dataHandler.sourGasComposition(storedData));
    const normalizedComp = normalizer.normalizeData();
    dispatch(setSourGasInitialData(normalizedComp));
    setInitialTableData([
      { name: "Мольная доля диоксида углерода в газе", value: normalizedComp.sour_gas_co2 },
      { name: "Мольная доля метана в газе", value: normalizedComp.sour_gas_ch4 },
      { name: "Мольная доля этана в газе", value: normalizedComp.sour_gas_c2h8 },
      { name: "Мольная доля пропана в газе", value: normalizedComp.sour_gas_c3h8 },
      { name: "Мольная доля и-бутана в газе", value: normalizedComp.sour_gas_ic4h10 },
      { name: "Мольная доля н-бутана в газе", value: normalizedComp.sour_gas_nc4h10 },
      { name: "Мольная доля и-пентан в газе", value: normalizedComp.sour_gas_ic5h12 },
      { name: "Мольная доля н-пентан в газе", value: normalizedComp.sour_gas_nc5h12 },
      { name: "Мольная доля сероводорода в газе", value: normalizedComp.sour_gas_h2s },
      { name: "Мольная доля воды в газе", value: normalizedComp.sour_gas_h2o },
    ]);
    toast.info("Составы были нормализованы");
  };

  const handleCloseSGCompModal = () => {
    dispatch(
      setModalWindowStatus({
        modalWindowStatus: false,
      }),
    );
    handleNormalize();
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
        <button onClick={handleNormalize}>Нормализовать</button>
        <button onClick={handleCloseSGCompModal}>Закрыть</button>
      </div>
    </div>
  );
};

export default SourGasModal;
