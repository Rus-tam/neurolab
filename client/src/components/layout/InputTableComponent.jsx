import { useContext, useState } from "react";
import { ParentContext } from "../labs/SimpleIsomerization.jsx";

const InputTableComponent = ({ caption, initialValues }) => {
  const [initialTableData, setInitialTableData] = useState(initialValues);
  const parentComponentName = useContext(ParentContext);

  const handleCellValueChange = (index, value) => {
    const updatedData = [...initialTableData];
    updatedData[index].value = value;
    setInitialTableData(updatedData);
  };

  const sendDataToAI = (event) => {
    event.preventDefault();

    console.log(parentComponentName);

    console.log(initialTableData);
  };

  return (
    <form onSubmit={sendDataToAI}>
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
