import { useFetchAmineTreatmentResQuery } from "../../store/apis/labsResultsApiSlice";
import { prepareLeanAmineResData, prepareSourGasResData } from "../../utils/prepareAmineTreatmentResData";
import AmineTreatmentResultTable from "../fragments/AmineTreatmentResultTable";
import Spinner from "../layout/Spinner";

const AmineTreatmentResults = () => {
  const { data: results, isError, isLoading } = useFetchAmineTreatmentResQuery();
  let sourGasData;
  let leanAmineData;

  if (!isError && !isLoading) {
    sourGasData = prepareSourGasResData(results[0]);
    leanAmineData = prepareLeanAmineResData(results[0]);
    console.log("TTTT", results[0]);
  }

  const component = (
    <>
      <div>
        <AmineTreatmentResultTable data={sourGasData} />
        <AmineTreatmentResultTable data={leanAmineData} />
      </div>
    </>
  );

  return <div>{isLoading ? <Spinner /> : component}</div>;
};

export default AmineTreatmentResults;
