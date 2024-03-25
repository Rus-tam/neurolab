import { useState, useEffect } from "react";
import { useFetchLowTempDistillationQuery } from "../../store/apis/labsResultsApiSlice";
import Spinner from "../layout/Spinner";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import AmineTreatmentResultTable from "../fragments/AmineTreatmentResultTable";

const LowTempDistillationResult = () => {
  const { data: results, isError, isLoading } = useFetchLowTempDistillationQuery();
  const [currentPage, setCurrentPage] = useState(0);

  const handlePrevClick = () => {
    if (currentPage > 0 && currentPage !== 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextClick = () => {
    if (currentPage <= results.sourGas.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const component = (
    <div className="low-temp-dist-res-container">
      <div className="low_temp_dist_res_tables">{/* <AmineTreatmentResultTable data={} /> */}</div>

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

export default LowTempDistillationResult;
