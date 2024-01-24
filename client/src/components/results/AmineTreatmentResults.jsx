import { useState, useEffect } from "react";
import { useFetchAmineTreatmentResQuery } from "../../store/apis/labsResultsApiSlice";
import {
  prepareLeanAmineResData,
  preparePredictedData,
  prepareSourGasResData,
  prepareAmineTreatmentData,
} from "../../utils/prepareAmineTreatmentResData";

import Spinner from "../layout/Spinner";
import "../styles/amine-treatment-res.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AmineTreatmentResTables from "./AmineTreatmentResTables";

const AmineTreatmentResults = () => {
  const { data: results, isError, isLoading } = useFetchAmineTreatmentResQuery();
  const [currentPage, setCurrentPage] = useState(0);
  let preparedResults = {};

  if (results) {
    preparedResults = prepareAmineTreatmentData(results);
  }

  let sourGasDataToComp;

  // let sourGasData = { "some key": "some value" };
  // let leanAmineData = {};
  // let predictedData = {};

  const updateDataToDisplay = () => {
    if (!isError && !isLoading && preparedResults) {
      sourGasDataToComp = preparedResults.sourGasResData[currentPage];
      console.log("RRRRRRRR", sourGasDataToComp);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 0 && currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage <= results.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    updateDataToDisplay();
  }, [currentPage, sourGasDataToComp]);

  const component = (
    <div className="amine-treatment-res-container">
      <div className="amine_treatment_res_tables">
        <AmineTreatmentResTables sourGasData={sourGasDataToComp} />
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

  return <div>{sourGasDataToComp ? <Spinner /> : component}</div>;
};

export default AmineTreatmentResults;
