import { ParentContext } from "../../utils/ParentContext.js";
import LabCards from "./LabCards.jsx";

const MyWorks = () => {
  return (
    <div className="my-works">
      <ParentContext.Provider value="my-works">
        <LabCards />
      </ParentContext.Provider>
    </div>
  );
};

export default MyWorks;
