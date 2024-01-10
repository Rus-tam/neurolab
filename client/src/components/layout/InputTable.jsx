import { useContext } from "react";
import { ParentContext } from "../../utils/ParentContext.js";
import { useDispatch, useSelector } from "react-redux";
import { setSimpleIsoRes } from "../../store/slices/simpleIsoSlice.js";
import { useSimpleIsoMutation, useAmineTreatmentMutation } from "../../store/apis/labsApiSlice.js";
import { simpleIsoCheck } from "../../utils/checkValues.js";
import SimpleIsoInitialDataTableFragment from "../fragments/SimpleIsoInitialDataTableFragment.jsx";
import AmineTreatmentInitialDataTableFragment from "../fragments/AmineTreatmentInitialDataTableFragment.jsx";
import LowTempDistDataTableFraction from "../fragments/LowTempDistDataTableFragment.jsx";
import { prepareDataToAI } from "../../utils/prepareDataToAI.js";

const InputTable = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const parentComponentName = useContext(ParentContext);

  const simpleIsoData = useSelector((state) => state.simpleIso);
  const amineTreatmentData = useSelector((state) => state.amineTreatment);
  const lowTempDistData = useSelector((state) => state.lowTempDistData);
  const [getSimpleIsoRes, IsoResults] = useSimpleIsoMutation();
  const [getAmineTreatmentRes, AmineResults] = useAmineTreatmentMutation();

  let dataToAI = {};
  let tableFragment = <></>;

  switch (parentComponentName) {
    case "simple-isomerization":
      // dataToAI = {
      //   vessel_volume: parseFloat(simpleIsoData.vessel_volume),
      //   feed_temperature: parseFloat(simpleIsoData.feed_temperature),
      //   feed_mass_flow: parseFloat(simpleIsoData.feed_mass_flow),
      // };
      tableFragment = <SimpleIsoInitialDataTableFragment caption={caption} initialValues={initialValues} />;
      break;

    case "amine-treatment":
      let { modalAmineWindowStatus, modalSGWindowStatus, ...dataToAI } = amineTreatmentData;
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
        const dataToAI = prepareDataToAI(simpleIsoData, "simple-isomerization");
        if (simpleIsoCheck(dataToAI) instanceof Error) {
          return null;
        } else {
          calculationRes = await getSimpleIsoRes(dataToAI);
          dispatch(setSimpleIsoRes(calculationRes.data));
        }
        break;

      case "amine-treatment":
        await getAmineTreatmentRes(dataToAI);
        console.log("OOOOOOOOOOOOOOOOO", dataToAI);
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
