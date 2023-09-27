import { useFetchSimpleIsoResQuery } from "../../store/apis/labsResultsApiSlice.js";
import { prepareSimpleIsoRes } from "../../utils/prepare-simple-iso-res.js";
import Spinner from "../layout/Spinner.jsx";
import OverallResultTable from "../layout/OverallResultTable.jsx";

const MyWorks = () => {
  const { data: results, isError, isLoading } = useFetchSimpleIsoResQuery();

  let processedResults = [];

  if (results) {
    processedResults = [...prepareSimpleIsoRes(results)];

    console.log(processedResults);
  }

  return (
    <div className="my-works">
      <h2>Мои работы</h2>

      <OverallResultTable processedData={processedResults} />

      <div className="simple-iso-results"></div>
    </div>
  );
};

export default MyWorks;
