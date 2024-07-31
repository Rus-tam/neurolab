import { useDispatch } from "react-redux";
import { useState } from "react";
import { setProp } from "../../store/slices/lowTempDistSlice";

const LowTempDistDataTableFraction = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const [initialTableData, setInitialTableData] = useState(initialValues);

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
    dispatch(
      setProp({
        gas_feed_temperature: initialTableData[0].value,
        gas_feed_mass_flow: initialTableData[1].value,
        gas_feed_pressure: initialTableData[2].value,
        stream_3_pressure: initialTableData[3].value,
        comp_frac: initialTableData[4].value,
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
