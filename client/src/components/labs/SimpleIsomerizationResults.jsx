import OverallResultTable from "../layout/OverallResultTable.jsx";
import { useFetchSimpleIsoResQuery } from "../../store/apis/labsResultsApiSlice.js";
import { prepareSimpleIsoRes } from "../../utils/prepare-simple-iso-res.js";

const SimpleIsomerizationResults = () => {
  const { data: results, isError, isLoading } = useFetchSimpleIsoResQuery();
  let processedResults = [];
  if (results) {
    processedResults = [...prepareSimpleIsoRes(results)];
    console.log(processedResults);
  }

  return (
    <>
      <h2>Простая изомеризация</h2>
      <OverallResultTable processedData={processedResults} />
    </>
  );
};

export default SimpleIsomerizationResults;
