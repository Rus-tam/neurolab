import OverallResultTable from "../layout/OverallResultTable.jsx";
import { useFetchSimpleIsoResQuery } from "../../store/apis/labsResultsApiSlice.js";
import { prepareSimpleIsoRes } from "../../utils/prepare-simple-iso-res.js";
import "../styles/simple-isomerization-result.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useEffect, useState } from "react";
import Spinner from "../layout/Spinner.jsx";

const SimpleIsomerizationResults = () => {
  const { data: results, isError, isLoading } = useFetchSimpleIsoResQuery();
  let processedResults = [];

  if (results) {
    processedResults = [...prepareSimpleIsoRes(results)];
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [dataToTable, setDataToTable] = useState([]);
  const itemsPerPage = 8;

  const updateDataToDisplay = () => {
    if (!isError && !isLoading) {
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      const dataToDisplay = processedResults.slice(startIndex, endIndex);
      setDataToTable(Object.values(dataToDisplay));
    }
  };

  const handleNextClick = () => {
    if (currentPage < Math.ceil(processedResults.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    updateDataToDisplay();
  }, [currentPage, isLoading]);

  const component = (
    <>
      <div className="table-container">
        <OverallResultTable processedData={dataToTable} />
      </div>
      <div className="navigation-buttons">
        <button onClick={handlePrevClick}>
          <FaArrowLeft />
        </button>
        <button onClick={handleNextClick}>
          <FaArrowRight />
        </button>
      </div>
    </>
  );

  return (
    <div className="isomerization-result">
      <h2>Простая изомеризация</h2>
      {isLoading ? <Spinner /> : component}
    </div>
  );
};

export default SimpleIsomerizationResults;
