const AmineTreatmentResultTable = ({ data }) => {
  console.log("CHECK data INCOME IN TABLE FRAGMENT", data);
  if (!data || Object.keys(data).length === 0) {
    return <p>Нет данных для отображения</p>;
  }

  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Параметр</th>
            <th>Значение параметра</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([parameter, value]) => (
            <tr key={parameter}>
              <td>{parameter}</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AmineTreatmentResultTable;
