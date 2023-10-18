import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSourGasInitialData, setAmineInitialData } from "../../store/slices/amineTreatmentSlice.js";

const AmineTreatmentInitialDataTableFragment = ({ initialValues }) => {
  const dispatch = useDispatch();
  const [sourGasTableData, setSourGasTableData] = useState(initialValues.slice(0, 12));
  const [amineTableData, setAmineTableData] = useState(initialValues.slice(12, 18));

  const handleGasCellValueChange = (index, value) => {
    const updatedDataGas = [...sourGasTableData];
    updatedDataGas[index].value = value;
    setSourGasTableData(updatedDataGas);
    dispatch(
      setSourGasInitialData({
        sour_gas_temperature: sourGasTableData[0].value,
        sour_gas_mass_flow: sourGasTableData[1].value,
        sour_gas_co2: sourGasTableData[2].value,
        sour_gas_ch4: sourGasTableData[3].value,
        sour_gas_c2h8: sourGasTableData[4].value,
        sour_gas_c3h8: sourGasTableData[5].value,
        sour_gas_ic4h10: sourGasTableData[6].value,
        sour_gas_nc4h10: sourGasTableData[7].value,
        sour_gas_ic5h12: sourGasTableData[8].value,
        sour_gas_nc5h12: sourGasTableData[9].value,
        sour_gas_h2s: sourGasTableData[10].value,
        sour_gas_h2o: sourGasTableData[11].value,
      }),
    );
  };

  const handleAmineCellValueChange = (index, value) => {
    const updatedDataAmine = [...amineTableData];
    updatedDataAmine[index].value = value;
    setAmineTableData(updatedDataAmine);
    dispatch(
      setAmineInitialData({
        amine_temperature: amineTableData[0].value,
        amine_mass_flow: amineTableData[1].value,
        amine_co2: amineTableData[2].value,
        amine_h2s: amineTableData[3].value,
        amine_h2o: amineTableData[4].value,
        amine_MDEA: amineTableData[5].value,
      }),
    );
  };

  return (
    <div className="amine-treatment-table">
      <div className="sour-gas">
        <table className="table">
          <caption>Кислый газ</caption>
          <tbody>
            {sourGasTableData.map((row, index) => (
              <tr key={index}>
                <td>{row.name}</td>
                <td>
                  <input
                    type="number"
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
    </div>
  );
};

export default AmineTreatmentInitialDataTableFragment;
