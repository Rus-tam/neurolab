import { ParentContext } from "../../utils/ParentContext.js";
import LabCards from "../views/LabCards.jsx";

const LabsList = () => {
  return (
    <ParentContext.Provider value="labs-list">
      <LabCards />
    </ParentContext.Provider>
  );
};

export default LabsList;
