import { useDispatch } from "react-redux";
import { useState } from "react";
import { setProp } from "../../store/slices/lowTempDistSlice";

const LowTempDistDataTableFraction = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const [initialTableData, setInitialTableData] = useState(initialValues);

  console.log("YYYYYYYYYYYY", initialValues);

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
    dispatch(
      setProp({
        gas_temperature: initialTableData[0].value,
        gas_mass_flow: initialTableData[1].value,
        gas_presure: initialTableData[2].value,
        column_pressure: initialTableData[3].value,
        gas_pressure_after_D1: initialTableData[4].value,
        heat_flow_T1: initialTableData[5].value,
      }),
    );
  };

  return (
    <table className="table">
      <caption>{caption}</caption>
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
  );
};

export default LowTempDistDataTableFraction;
