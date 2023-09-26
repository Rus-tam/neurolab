import { useFetchSimpleIsoResQuery } from "../../store/apis/labsResultsApiSlice.js";
import {prepareSimpleIsoRes} from "../../utils/prepare-simple-iso-res.js";

const MyWorks = () => {
  const { data: results, isError, isLoading } = useFetchSimpleIsoResQuery();

  if (results) {
      const processedResults = prepareSimpleIsoRes(results)

      console.log(processedResults)
  }


  return (
    <div className="my-works">
      <h2>Мои проекты</h2>

      <div className="simple-iso-results"></div>
    </div>
  );
};

export default MyWorks;
