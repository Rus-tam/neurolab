const OverallResultTable = ({ processedData }) => {
  if (!processedData || processedData.length === 0) {
    return <p>Нет данных для отображения</p>;
  }

  const columns = Object.keys(processedData[0]);

  return (
    <table className="table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {processedData.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column, colIndex) => (
              <td key={colIndex}>{row[column]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OverallResultTable;
