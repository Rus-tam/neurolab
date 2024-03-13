import { useContext } from "react";
import { ParentContext } from "../../utils/ParentContext.js";
import { useDispatch, useSelector } from "react-redux";
import { setSimpleIsoRes } from "../../store/slices/simpleIsoSlice.js";
import { setAmineTreatmentResults } from "../../store/slices/amineTreatmentSlice.js";
import {
  useSimpleIsoMutation,
  useAmineTreatmentMutation,
  useLowTempDistillationMutation,
} from "../../store/apis/labsApiSlice.js";
import { simpleIsoCheck, amineTreatmentCheck, lowTempDistCheck } from "../../utils/checkValues.js";
import SimpleIsoInitialDataTableFragment from "../fragments/SimpleIsoInitialDataTableFragment.jsx";
import AmineTreatmentInitialDataTableFragment from "../fragments/AmineTreatmentInitialDataTableFragment.jsx";
import LowTempDistDataTableFraction from "../fragments/LowTempDistDataTableFragment.jsx";
import { prepareDataToAI } from "../../utils/prepareDataToAI.js";
import { setLowTempDistResults } from "../../store/slices/lowTempDistSlice.js";

const InputTable = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const parentComponentName = useContext(ParentContext);

  const simpleIsoData = useSelector((state) => state.simpleIso);
  const amineTreatmentData = useSelector((state) => state.amineTreatment);
  const lowTempDistData = useSelector((state) => state.lowTempDist);
  const [getSimpleIsoRes, IsoResults] = useSimpleIsoMutation();
  const [getAmineTreatmentRes, AmineResults] = useAmineTreatmentMutation();
  const [getLowTempDistRes, lowTempDistResults] = useLowTempDistillationMutation();

  let dataToAI = {};
  let tableFragment = <></>;

  switch (parentComponentName) {
    case "simple-isomerization":
      tableFragment = <SimpleIsoInitialDataTableFragment caption={caption} initialValues={initialValues} />;
      break;

    case "amine-treatment":
      tableFragment = (
        <AmineTreatmentInitialDataTableFragment caption={caption} initialValues={initialValues} />
      );
      break;

    case "low-temp-dist":
      dataToAI = { ...lowTempDistData };
      tableFragment = (
        <LowTempDistDataTableFraction
          caption={caption}
          initialValues={initialValues}
        ></LowTempDistDataTableFraction>
      );
      break;
  }

  const handleCalculation = async (e) => {
    e.preventDefault();

    let calculationRes;

    switch (parentComponentName) {
      case "simple-isomerization":
        dataToAI = prepareDataToAI(simpleIsoData, "simple-isomerization");
        if (simpleIsoCheck(dataToAI) instanceof Error) {
          return null;
        } else {
          calculationRes = await getSimpleIsoRes(dataToAI);
          dispatch(setSimpleIsoRes(calculationRes.data));
        }
        break;

      case "amine-treatment":
        dataToAI = prepareDataToAI(amineTreatmentData, "amine-treatment");
        if (amineTreatmentCheck(dataToAI) instanceof Error) {
          return null;
        } else {
          calculationRes = await getAmineTreatmentRes(dataToAI);
          dispatch(setAmineTreatmentResults(calculationRes.data));
        }
        break;

      case "low-temp-dist":
        dataToAI = prepareDataToAI(lowTempDistData, "low-temp-dist");
        if (lowTempDistCheck(dataToAI) instanceof Error) {
          return null;
        } else {
          calculationRes = await getLowTempDistRes(dataToAI);
          dispatch(setLowTempDistResults(calculationRes.data));
        }
    }
  };

  return (
    <form onSubmit={handleCalculation}>
      <div className="table-fragment">{tableFragment}</div>

      <button className="calculate-button" type="submit">
        Рассчитать
      </button>
    </form>
  );
};

export default InputTable;
