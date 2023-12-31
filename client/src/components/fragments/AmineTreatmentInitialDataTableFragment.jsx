import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSourGasTempPress, setAmineTempPress } from "../../store/slices/amineTreatmentSlice.js";
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
      <div className="regen-amine">
        <table className="table">
          <caption>Раствор амина</caption>
          <tbody>
            {amineTableData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>
                  <input
                    type="number"
                    maxLength={6}
                    value={row.value}
                    required
                    onChange={(e) => handleAmineCellValueChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="sour-gas">
        <table className="table">
          <caption>Кислый газ</caption>
          <tbody>
            {sourGasTableData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>
                  <input
                    // type="number"
                    maxLength={6}
                    value={row.value}
                    required
                    onChange={(e) => handleGasCellValueChange(index, e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AmineTreatmentInitialDataTableFragment;
