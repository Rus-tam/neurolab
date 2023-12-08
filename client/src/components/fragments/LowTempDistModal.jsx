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
    { name: "Массовая доля азота", value: "0.018" },
    { name: "Массовая доля оксида углерода II", value: "0.011" },
    { name: "Массовая доля метана", value: "0.576" },
    { name: "Массовая доля этана", value: "0.113" },
    { name: "Массовая доля пропана", value: "0.128" },
    { name: "Массовая доля и-бутана", value: "0.0475" },
    { name: "Массовая доля н-бутана", value: "0.0515" },
    { name: "Массовая доля пентана", value: "0.02" },
    { name: "Массовая доля гексана", value: "0.0084" },
    { name: "Массовая доля гептана", value: "0.003" },
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
    const normalizer = new Normalize(dataHandler.sourGasComposition(storedData));
    const normalizedComp = normalizer.normalizeData();
    dispatch(setGasComp(normalizedComp));
    setInitialTableData([
      { name: "Массовая доля азота", value: normalizedComp.n2_mass_frac },
      { name: "Массовая доля оксида углерода II", value: normalizedComp.co2_mass_frac },
      { name: "Массовая доля метана", value: normalizedComp.ch4_mass_frac },
      { name: "Массовая доля этана", value: normalizedComp.c2h6_mass_frac },
      { name: "Массовая доля пропана", value: normalizedComp.c3h8_mass_frac },
      { name: "Массовая доля и-бутана", value: normalizedComp.ic4h10_mass_frac },
      { name: "Массовая доля н-бутана", value: normalizedComp.nc4h10_mass_frac },
      { name: "Массовая доля пентана", value: normalizedComp.c5h12_mass_frac },
      { name: "Массовая доля гексана", value: normalizedComp.c6h14_mass_frac },
      { name: "Массовая доля гептана", value: normalizedComp.c7h16_mass_frac },
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
