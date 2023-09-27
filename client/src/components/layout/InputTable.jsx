import { useContext, useState } from "react";
import { ParentContext } from "../../utils/ParentContext.js";
import { useDispatch } from "react-redux";
import { setSimpleIsoRes } from "../../store/slices/simpleIsoSlice.js";
import { useSimpleIsoMutation } from "../../store/apis/labsApiSlice.js";
import { simpleIsoCheck } from "../../utils/simple-iso-check.js";

const InputTable = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const parentComponentName = useContext(ParentContext);
  const [initialTableData, setInitialTableData] = useState(initialValues);

  const [getSimpleIsoRes, results] = useSimpleIsoMutation();

  let dataToAI = {};
  let calculationRes;

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

        if (simpleIsoCheck(dataToAI) instanceof Error) {
          return null;
        } else {
          calculationRes = await getSimpleIsoRes(dataToAI);
          dispatch(setSimpleIsoRes(calculationRes.data));
        }
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
      <button className="calculate-button" type="submit">
        Рассчитать
      </button>
    </form>
  );
};

export default InputTable;
