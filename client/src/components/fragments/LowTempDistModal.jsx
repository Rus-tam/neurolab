import "../styles/modal.css";
import { useDispatch, useSelector } from "react-redux";
import { DataHandler } from "../../utils/preparaDataToState.js";
import { useState } from "react";
import { Normalize } from "../../utils/normalize.js";
import { setGasComp } from "../../store/slices/lowTempDistSlice.js";
import { setModalWindowStatus } from "../../store/slices/lowTempDistSlice.js";
import { toast } from "react-toastify";

const LowTempDistModal = () => {
  const dataHandler = new DataHandler();
  const dispatch = useDispatch();

  const storedData = useSelector((state) => state.lowTempDist);

  const [initialTableData, setInitialTableData] = useState([
    { name: "Массовая доля азота", value: "0.0" },
    { name: "Массовая доля оксида углерода II", value: "0.0" },
    { name: "Массовая доля метана", value: "0.679" },
    { name: "Массовая доля этана", value: "0.1189" },
    { name: "Массовая доля пропана", value: "0.0669" },
    { name: "Массовая доля и-бутана", value: "0.109" },
    { name: "Массовая доля н-бутана", value: "0.0083" },
    { name: "Массовая доля и-пентана", value: "0.009" },
    { name: "Массовая доля н-пентана", value: "0.0085" },
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
      const sourGasComp = dataHandler.dataToState("low-temp-dist", initialTableData);
      dispatch(setGasComp(sourGasComp));
    }
  };

  const handleNormalize = () => {
    const normalizer = new Normalize(dataHandler.low_temp_dist_gas(storedData));
    const normalizedComp = normalizer.normalizeData();
    console.log("UUUU", normalizedComp);
    dispatch(setGasComp(normalizedComp));
    setInitialTableData([
      { name: "Массовая доля азота", value: normalizedComp.feed_gas_n2 },
      { name: "Массовая доля оксида углерода II", value: normalizedComp.feed_gas_co2 },
      { name: "Массовая доля метана", value: normalizedComp.feed_gas_ch4 },
      { name: "Массовая доля этана", value: normalizedComp.feed_gas_c2h6 },
      { name: "Массовая доля пропана", value: normalizedComp.feed_gas_c3h8 },
      { name: "Массовая доля и-бутана", value: normalizedComp.feed_gas_ic4h10 },
      { name: "Массовая доля н-бутана", value: normalizedComp.feed_gas_nc4h10 },
      { name: "Массовая доля и-пентана", value: normalizedComp.feed_gas_ic5h12 },
      { name: "Массовая доля н-пентана", value: normalizedComp.feed_gas_nc5h12 },
    ]);
    toast.info("Составы были нормализованы");
  };

  const handleCloseGasCompModal = () => {
    dispatch(
      setModalWindowStatus({
        modalSGWindowStatus: false,
      }),
    );
    handleNormalize();
  };

  return (
    <div className="sour-gas-comp-modal">
      <h2>Введите состав газа</h2>

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
        <button onClick={handleCloseGasCompModal}>Закрыть</button>
      </div>
    </div>
  );
};

export default LowTempDistModal;
