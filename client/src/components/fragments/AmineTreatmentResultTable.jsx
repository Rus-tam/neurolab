const AmineTreatmentResultTable = ({ data }) => {
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
