import { useState } from "react";
import { useDispatch } from "react-redux";
import { setSimpleIsoInitialData } from "../../store/slices/simpleIsoSlice.js";

const AmineTreatmentInitialDataTableFragment = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const [sourGasTableData, setSourGasTableData] = useState(initialValues.slice(0, 11));
  const [amineTableData, setAmineTableData] = useState(initialValues.slice(12, 17));

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
    dispatch(
      setSimpleIsoInitialData({
        vesselVolume: initialTableData[0].value,
        feedMassFlow: initialTableData[1].value,
        feedTemperature: initialTableData[2].value,
      }),
    );
  };

  return (
    <div className="amine-treatment-table">
      <div className="sour-gas">
        <table className="table">
          <caption>{caption}</caption>
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
          <caption>{caption}</caption>
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
