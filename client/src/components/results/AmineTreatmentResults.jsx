import { useFetchAmineTreatmentResQuery } from "../../store/apis/labsResultsApiSlice";
import {
  prepareLeanAmineResData,
  preparePredictedData,
  prepareSourGasResData,
} from "../../utils/prepareAmineTreatmentResData";
import AmineTreatmentResultTable from "../fragments/AmineTreatmentResultTable";
import Spinner from "../layout/Spinner";
import "../styles/amine-treatment-res.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const AmineTreatmentResults = () => {
  const { data: results, isError, isLoading } = useFetchAmineTreatmentResQuery();
  let sourGasData;
  let leanAmineData;
  let predictedData;

  if (!isError && !isLoading) {
    sourGasData = prepareSourGasResData(results[0]);
    leanAmineData = prepareLeanAmineResData(results[0]);
    predictedData = preparePredictedData(results[0]);
  }

  const handlePrevClick = () => {};
  const handleNextClick = () => {};

  const component = (
    <div className="amine-treatment-res-container">
      <div className="amine_treatment_res_tables">
        <AmineTreatmentResultTable className="amine_treatment_table" data={sourGasData} />
        <AmineTreatmentResultTable className="amine_treatment_table" data={leanAmineData} />
        <AmineTreatmentResultTable className="amine_treatment_table" data={predictedData} />
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevClick}>
          <FaArrowLeft />
        </button>
        <button onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      </div>
    </div>
  );

  return <div>{isLoading ? <Spinner /> : component}</div>;
};

export default AmineTreatmentResults;
