import React, { useState } from "react";

const ResultTableComponent = ({ caption }) => {
  const [resultData, setResultData] = useState([
    { name: "Концентрация цис-бутена в продукте, % масс.", value: "95" },
    { name: "Температура продукта, град. Цельсия", value: "45" },
  ]);
  return (
    <div className="table-container">
      <table className="table">
        <caption>{caption}</caption>
        <tbody>
          {resultData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTableComponent;
