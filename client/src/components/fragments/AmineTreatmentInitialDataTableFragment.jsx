import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSourGasTempPress, setAmineTempPress } from "../../store/slices/amineTreatmentSlice.js";
import { Tooltip } from "react-tooltip";
import "../styles/amine-treatment.css";

const AmineTreatmentInitialDataTableFragment = ({ initialValues }) => {
  const dispatch = useDispatch();
  const [sourGasTableData, setSourGasTableData] = useState(initialValues.slice(0, 2));
  const [amineTableData, setAmineTableData] = useState(initialValues.slice(2, 4));

  const handleGasCellValueChange = (index, value) => {
    const updatedDataGas = [...sourGasTableData];
    updatedDataGas[index].value = value;
    setSourGasTableData(updatedDataGas);
    dispatch(
      setSourGasTempPress({
        sour_gas_temperature: parseFloat(sourGasTableData[0].value),
        sour_gas_mass_flow: parseFloat(sourGasTableData[1].value),
      }),
    );
  };

  const handleAmineCellValueChange = (index, value) => {
    const updatedDataAmine = [...amineTableData];
    updatedDataAmine[index].value = value;
    setAmineTableData(updatedDataAmine);
    dispatch(
      setAmineTempPress({
        amine_temperature: parseFloat(amineTableData[0].value),
        amine_mass_flow: parseFloat(amineTableData[1].value),
      }),
    );
  };

  return (
    <div className="amine-treatment-table">
      <div className="initial_data">
        <table className="table">
          <tbody>
            <tr>
              <td>{amineTableData[0].name}</td>
              <td>
                <input
                  id="amine_temp"
                  type="number"
                  maxLength={6}
                  value={amineTableData[0].value}
                  required
                  onChange={(e) => handleAmineCellValueChange(0, e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>{amineTableData[1].name}</td>
              <td>
                <input
                  id="amine_mass_flow"
                  type="number"
                  maxLength={6}
                  value={amineTableData[1].value}
                  required
                  onChange={(e) => handleAmineCellValueChange(1, e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>{sourGasTableData[0].name}</td>
              <td>
                <input
                  id="sour_gas_temp"
                  type="number"
                  maxLength={6}
                  value={sourGasTableData[0].value}
                  required
                  onChange={(e) => handleGasCellValueChange(0, e.target.value)}
                />
              </td>
            </tr>
            <tr>
              <td>{sourGasTableData[1].name}</td>
              <td>
                <input
                  id="sour_gas_mass_flow"
                  type="number"
                  maxLength={6}
                  value={sourGasTableData[1].value}
                  required
                  onChange={(e) => handleGasCellValueChange(1, e.target.value)}
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Tooltip anchorSelect="#amine_temp" content="от +10 до +60 град. Цельсия" />
        <Tooltip anchorSelect="#amine_mass_flow" content="от 15 000 до 700 000 кг/ч" />
        <Tooltip anchorSelect="#sour_gas_temp" content="от +10 до +60 град. Цельсия" />
        <Tooltip anchorSelect="#sour_gas_mass_flow" content="от 15 000 до 700 000 кг/ч" />
      </div>
    </div>
  );
};

export default AmineTreatmentInitialDataTableFragment;
