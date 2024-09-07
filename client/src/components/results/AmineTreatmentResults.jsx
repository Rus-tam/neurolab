import { useState, useEffect } from "react";
import { useFetchAmineTreatmentResQuery } from "../../store/apis/labsResultsApiSlice";
import {
  prepareLeanAmineResData,
  preparePredictedData,
  prepareSourGasResData,
} from "../../utils/prepareAmineTreatmentResData";

import Spinner from "../layout/Spinner";
import "../styles/amine-treatment-res.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AmineTreatmentResultTable from "../fragments/AmineTreatmentResultTable";

const AmineTreatmentResults = () => {
  const { data: results, isError, isLoading } = useFetchAmineTreatmentResQuery();
  const [currentPage, setCurrentPage] = useState(0);
  const [sourGasData, setSourGasData] = useState({});
  const [leanAmineData, setLeanAmineData] = useState({});
  const [predictedData, setPredictedData] = useState({});

  const workingData = { ...results };

  const updateDataToDisplay = () => {
    if (!isError && !isLoading && workingData.sourGasInitialData && workingData.amineInitialData) {
      console.log("YYYY", workingData.amineTreatmentResult[0]);
      console.log("OOOO", currentPage);
      setSourGasData(prepareSourGasResData(workingData.sourGasInitialData[currentPage]));
      setLeanAmineData(prepareLeanAmineResData(workingData.amineInitialData[currentPage]));
      setPredictedData(preparePredictedData(workingData.amineTreatmentResult[currentPage]));
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 0 && currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage <= results.sourGasInitialData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    updateDataToDisplay();
  }, [currentPage, isLoading]);

  const component = (
    <div className="amine-treatment-res-container">
      <div className="amine_treatment_res_tables">
        <AmineTreatmentResultTable data={sourGasData} />
        <AmineTreatmentResultTable data={leanAmineData} />
        <AmineTreatmentResultTable data={predictedData} />
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
