import { useDispatch, useSelector } from "react-redux";
import { DataHandler } from "../../utils/preparaDataToState.js";
import { useState } from "react";

const LowTempDistModal = () => {
  const dataHandler = new DataHandler();
  const dispatch = useDispatch();

  const storedData = useSelector((state) => state.lowTempDist);

  const [initialTableData, setInitialTableData] = useState([
    { name: "Массовая доля азота", value: "0.018" },
    { name: "Массовая доля оксида углерода II", value: "0.011" },
    { name: "Массовая доля метана", value: "0.576" },
    { name: "Массовая доля этана", value: "0.113" },
    { name: "Массовая доля пропана", value: "0.128" },
    { name: "Массовая доля и-бутана", value: "0.0475" },
    { name: "Массовая доля н-бутана", value: "0.0515" },
    { name: "Массовая доля пентана", value: "0.02" },
    { name: "Массовая доля гексана", value: "0.0084" },
    { name: "Массовая доля гептана", value: "0.003" },
  ]);

  return (
    <div>
      <h1>Modal window</h1>
    </div>
  );
};

export default LowTempDistModal;
