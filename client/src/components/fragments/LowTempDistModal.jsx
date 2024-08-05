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

  console.log("PPPPP", storedData);

  const [initialTableData, setInitialTableData] = useState([
    { name: "Массовая доля метана", value: storedData.gas_feed_ch4_mass_frac },
    { name: "Массовая доля этана", value: storedData.gas_feed_c2h6_mass_frac },
    { name: "Массовая доля пропана", value: storedData.gas_feed_c3h8_mass_frac },
    { name: "Массовая доля и-бутана", value: storedData.gas_feed_ic4h10_mass_frac },
    { name: "Массовая доля н-бутана", value: storedData.gas_feed_nc4h10_mass_frac },
    { name: "Массовая доля и-пентана", value: storedData.gas_feed_ic5h12_mass_frac },
    { name: "Массовая доля н-пентана", value: storedData.gas_feed_nc5h12_mass_frac },
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
      const gasComp = dataHandler.dataToState("low-temp-dist", initialTableData);
      dispatch(setGasComp(gasComp));
    }
  };

  const handleNormalize = () => {
    const normalizer = new Normalize(dataHandler.low_temp_dist_gas(storedData));
    const normalizedComp = normalizer.normalizeData();
    dispatch(setGasComp(normalizedComp));
    setInitialTableData([
      { name: "Массовая доля метана", value: normalizedComp.gas_feed_ch4_mass_frac },
      { name: "Массовая доля этана", value: normalizedComp.gas_feed_c2h6_mass_frac },
      { name: "Массовая доля пропана", value: normalizedComp.gas_feed_c3h8_mass_frac },
      { name: "Массовая доля и-бутана", value: normalizedComp.gas_feed_ic4h10_mass_frac },
      { name: "Массовая доля н-бутана", value: normalizedComp.gas_feed_nc4h10_mass_frac },
      { name: "Массовая доля и-пентана", value: normalizedComp.gas_feed_ic5h12_mass_frac },
      { name: "Массовая доля н-пентана", value: normalizedComp.gas_feed_nc5h12_mass_frac },
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
