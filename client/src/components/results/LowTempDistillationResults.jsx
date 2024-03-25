import { useFetchLowTempDistillationQuery } from "../../store/apis/labsResultsApiSlice";

const LowTempDistillation = () => {
  const { data: results, isError, isLoading } = useFetchLowTempDistillationQuery();
};

export default LowTempDistillation;
