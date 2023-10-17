import { setSimpleIsoInitialData } from "../../store/slices/simpleIsoSlice.js";
import { useDispatch } from "react-redux";
import { useState } from "react";

const SimpleIsoInitialDataTableFragment = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const [initialTableData, setInitialTableData] = useState(initialValues);

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

export default SimpleIsoInitialDataTableFragment;
