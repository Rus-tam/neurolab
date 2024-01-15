import { useFetchAmineTreatmentResQuery } from "../../store/apis/labsResultsApiSlice";
import { prepareSourGasResData } from "../../utils/prepareSourGasResData";
import AmineTreatmentResultTable from "../fragments/AmineTreatmentResultTable";
import Spinner from "../layout/Spinner";

const AmineTreatmentResults = () => {
  const { data: results, isError, isLoading } = useFetchAmineTreatmentResQuery();
  let sourGasData;

  if (!isError && !isLoading) {
    sourGasData = prepareSourGasResData(results[0]);
  }

  const component = (
    <>
      <div>
        <AmineTreatmentResultTable data={sourGasData} />
      </div>
    </>
  );

  return <div>{isLoading ? <Spinner /> : component}</div>;
};

export default AmineTreatmentResults;
