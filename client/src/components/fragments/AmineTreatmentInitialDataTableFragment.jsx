import { useState } from "react";
import { useDispatch } from "react-redux";

const AmineTreatmentInitialDataTableFragment = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const [sourGasTableData, setSourGasTableData] = useState(initialValues.slice(0, 12));
  const [amineTableData, setAmineTableData] = useState(initialValues.slice(12, 18));

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
    dispatch(
      setAmineTreatmentInitialData({
        sourGasTemperature: initialValues[0].values,
        sourGasMassFlow: initialValues[1].values,
        sourGas_co2: initialValues[2].values,
        sourGas_ch4: initialValues[3].values,
        sourGas_c2h8: initialValues[4].values,
        sourGas_c3h8: initialValues[5].values,
        sourGas_ic4h10: initialValues[6].values,
        sourGas_nc4h10: initialValues[7].values,
        sourGas_ic5h12: initialValues[8].values,
        sourGas_nc5h12: initialValues[9].values,
        sourGas_h2s: initialValues[10].values,
        sourGas_h2o: initialValues[11].values,

        amineTemperature: initialValues[12].values,
        amineMassFlow: initialValues[13].values,
        amine_co2: initialValues[14].values,
        amine_h2s: initialValues[15].values,
        amine_h20: initialValues[16].values,
        amine_MDEA: initialValues[17].values,
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
                    onChange={(e) => handleCellValueChange(index, e.target.value)}
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
                    onChange={(e) => handleCellValueChange(index, e.target.value)}
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
