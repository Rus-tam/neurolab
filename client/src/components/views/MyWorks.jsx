import { ParentContext } from "../../utils/ParentContext.js";
import LabCards from "./LabCards.jsx";

const MyWorks = () => {
  // const { data: results, isError, isLoading } = useFetchSimpleIsoResQuery();
  //
  // let processedResults = [];
  //
  // if (results) {
  //   processedResults = [...prepareSimpleIsoRes(results)];
  //
  //   console.log(processedResults);
  // }

  return (
    <div className="my-works">
      <ParentContext.Provider value="my-works">
        <LabCards />
      </ParentContext.Provider>
    </div>
  );
};

export default MyWorks;
