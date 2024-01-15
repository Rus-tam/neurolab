import { useFetchAmineTreatmentResQuery } from "../../store/apis/labsResultsApiSlice";
import {
  prepareLeanAmineResData,
  preparePredictedData,
  prepareSourGasResData,
} from "../../utils/prepareAmineTreatmentResData";
import AmineTreatmentResultTable from "../fragments/AmineTreatmentResultTable";
import Spinner from "../layout/Spinner";

const AmineTreatmentResults = () => {
  const { data: results, isError, isLoading } = useFetchAmineTreatmentResQuery();
  let sourGasData;
  let leanAmineData;
  let predictedData;

  if (!isError && !isLoading) {
    sourGasData = prepareSourGasResData(results[0]);
    leanAmineData = prepareLeanAmineResData(results[0]);
    predictedData = preparePredictedData(results[0]);
    console.log("TTTT", results[0]);
  }

  const component = (
    <>
      <div>
        <AmineTreatmentResultTable data={sourGasData} />
        <AmineTreatmentResultTable data={leanAmineData} />
        <AmineTreatmentResultTable data={predictedData} />
      </div>
    </>
  );

  return <div>{isLoading ? <Spinner /> : component}</div>;
};

export default AmineTreatmentResults;
