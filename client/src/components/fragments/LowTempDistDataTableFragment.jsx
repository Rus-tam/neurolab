import { useDispatch } from "react-redux";
import { useState } from "react";
import { setProp } from "../../store/slices/lowTempDistSlice";
import { Tooltip } from "react-tooltip";

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
    <div>
      <table className="table">
        <caption>{caption}</caption>
        <tbody>
          <tr>
            <td>{initialTableData[0].name}</td>
            <td>
              <input
                id="temp_input"
                type="number"
                maxLength={6}
                value={initialTableData[0].value}
                required
                onChange={(e) => handleCellValueChange(0, e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{initialTableData[1].name}</td>
            <td>
              <input
                id="mass_flow"
                type="number"
                maxLength={6}
                value={initialTableData[1].value}
                required
                onChange={(e) => handleCellValueChange(1, e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{initialTableData[2].name}</td>
            <td>
              <input
                id="feed_pressure"
                type="number"
                maxLength={6}
                value={initialTableData[2].value}
                required
                onChange={(e) => handleCellValueChange(2, e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{initialTableData[3].name}</td>
            <td>
              <input
                id="expander_pressure"
                type="number"
                maxLength={6}
                value={initialTableData[3].value}
                required
                onChange={(e) => handleCellValueChange(3, e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>{initialTableData[4].name}</td>
            <td>
              <input
                id="c1_c2_mass_fr"
                type="number"
                maxLength={6}
                value={initialTableData[4].value}
                required
                onChange={(e) => handleCellValueChange(4, e.target.value)}
              />
            </td>
          </tr>
        </tbody>
      </table>
      <Tooltip anchorSelect="#temp_input" content="от -25 до +10 град. Цельсия" />
      <Tooltip anchorSelect="#mass_flow" content="от 5000 до 30000 кг/ч" />
      <Tooltip anchorSelect="#feed_pressure" content="от 3500 до 4900 Па" />
      <Tooltip anchorSelect="#expander_pressure" content="от 2000 до 2600 Па" />
      <Tooltip anchorSelect="#c1_c2_mass_fr" content="от 0.01 до 0.15" />
    </div>
  );
};

export default LowTempDistDataTableFraction;
