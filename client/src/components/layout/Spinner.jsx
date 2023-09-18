import { Hourglass } from "react-loader-spinner";
import "../../index.css";

const Spinner = ({ isLoading }) => {
  return (
    <div className="spinner-container">
      {isLoading ? (
        <Hourglass
          visible={true}
          height="100"
          width="100"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#306cce", "#72a1ed"]}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Spinner;
