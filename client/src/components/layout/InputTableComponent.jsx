import { useContext, useState } from "react";
import { ParentContext } from "../labs/SimpleIsomerization.jsx";
import { useDispatch } from "react-redux";
import { setSimpleIsoRes } from "../../store/slices/simpleIsoSlice.js";
import { useSimpleIsoMutation } from "../../store/apis/labsApiSlice.js";

const InputTableComponent = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const parentComponentName = useContext(ParentContext);
  const [initialTableData, setInitialTableData] = useState(initialValues);

  const [getSimpleIsoRes, results] = useSimpleIsoMutation();

  let dataToAI = {};
  let res;

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
  };

  const setInitialData = async (e) => {
    e.preventDefault();

    switch (parentComponentName) {
      case "simple-isomerization":
        dataToAI = {
          vesselVolume: initialTableData[0].value,
          feedMassFlow: initialTableData[1].value,
          feedTemperature: initialTableData[2].value,
        };
        res = await getSimpleIsoRes(dataToAI);
        dispatch(setSimpleIsoRes(res.data));
    }
  };

  return (
    <form onSubmit={setInitialData}>
      <table className="table">
        <caption>{caption}</caption>
        <tbody>
          {initialTableData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>
                <input
                  type="text"
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
      <button className="calculate-button" type="submit">
        Рассчитать
      </button>
    </form>
  );
};

export default InputTableComponent;
