import "../styles/modal.css";
import { useState } from "react";
import { setModalWindowStatus, setSourGasInitialData } from "../../store/slices/amineTreatmentSlice.js";
import { useDispatch } from "react-redux";
import { DataHandler } from "../../utils/preparaDataToState.js";
import { useSelector } from "react-redux";
import { Normalize } from "../../utils/normalize.js";
import { toast } from "react-toastify";

const AmineModel = () => {
  const dataHandler = new DataHandler();
  const dispatch = useDispatch();

  const storedData = useSelector((state) => state.amineTreatment);

  const [initialTableData, setInitialTableData] = useState([
    { name: "Мольная доля MDEA в аминовом растворе", value: storedData.amine_MDEA },
    { name: "Мольная доля воды в аминовом растворе", value: storedData.amine_h2o },
    { name: "Мольная доля углекислого газа в аминовом растворе", value: storedData.amine_co2 },
    { name: "Мольная доля сероводорода в аминовом растворе", value: storedData.amine_h2s },
  ]);

  return <div>Amine Modal</div>;
};

export default AmineModel;
