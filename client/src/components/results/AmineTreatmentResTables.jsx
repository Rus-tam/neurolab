import AmineTreatmentResultTable from "../fragments/AmineTreatmentResultTable";

const AmineTreatmentResTables = ({ sourGasData }) => {
  console.log("PPPPPP", sourGasData);
  return (
    <>
      <AmineTreatmentResultTable className="amine_treatment_table" data={sourGasData} />
      {/*<AmineTreatmentResultTable className="amine_treatment_table" data={leanAmineData} />*/}
      {/*<AmineTreatmentResultTable className="amine_treatment_table" data={predictedData} />*/}
    </>
  );
};

export default AmineTreatmentResTables;
