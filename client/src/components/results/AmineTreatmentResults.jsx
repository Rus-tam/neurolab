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
import AmineTreatmentResultTable from "../fragments/AmineTreatmentResultTable";

const AmineTreatmentResults = () => {
  let leanAmineData = {};
  let predictedData = {};
  const { data: results, isError, isLoading } = useFetchAmineTreatmentResQuery();
  const [currentPage, setCurrentPage] = useState(0);
  const [sourGasData, setSourGasData] = useState({});

  console.log("CHECK RESULTS", results);

  const workingData = { ...results };

  const updateDataToDisplay = () => {
    if (!isError && !isLoading && workingData.sourGas) {
      setSourGasData(prepareSourGasResData(workingData.sourGas[currentPage]));

      console.log("CHECK updateDataToDisplay function", sourGasData);
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
  }, [currentPage, isLoading]);

  const component = (
    <div className="amine-treatment-res-container">
      <AmineTreatmentResultTable data={sourGasData} />
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
