import { useFetchAmineTreatmentResQuery } from "../../store/apis/labsResultsApiSlice";

const AmineTreatmentResults = () => {
  const { data: results, isError, isLoading } = useFetchAmineTreatmentResQuery();

  console.log("EEEEEEEE", results);

  return <div>AmineTreatmentResults</div>;
};

export default AmineTreatmentResults;
