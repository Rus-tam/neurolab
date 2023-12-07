import { useDispatch } from "react-redux";
import { useState } from "react";
import { setGasProp } from "../../store/slices/lowTempDistSlice";

const LowTempDistDataTableFraction = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const [initialTableData, setInitialTableData] = useState(initialValues);

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
    dispatch(
      setGasProp({
        gas_temperature: initialTableData[0].value,
        gas_mass_flow: initialTableData[1].value,
        n2_mass_frac: initialTableData[2].value,
        ch4_mass_frac: initialTableData[3].value,
        c2h6_mass_frac: initialTableData[4].value,
        c3h8_mass_frac: initialTableData[5].value,
        ic4h10_mass_frac: initialTableData[6].value,
        c5h12_mass_frac: initialTableData[7].value,
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
