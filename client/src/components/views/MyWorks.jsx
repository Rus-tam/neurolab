import { useFetchSimpleIsoResQuery } from "../../store/apis/labsResultsApiSlice.js";

const MyWorks = () => {
  const { data, isError, isLoading } = useFetchSimpleIsoResQuery();

  console.log(data);

  return (
    <div className="my-works">
      <h2>Мои проекты</h2>

      <div className="simple-iso-results"></div>
    </div>
  );
};

export default MyWorks;
