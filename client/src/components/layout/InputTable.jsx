import { useContext } from "react";
import { ParentContext } from "../../utils/ParentContext.js";
import { useDispatch, useSelector } from "react-redux";
import { setSimpleIsoRes } from "../../store/slices/simpleIsoSlice.js";
import { useSimpleIsoMutation, useAmineTreatmentMutation } from "../../store/apis/labsApiSlice.js";
import { simpleIsoCheck } from "../../utils/checkValues.js";
import SimpleIsoInitialDataTableFragment from "../fragments/SimpleIsoInitialDataTableFragment.jsx";
import AmineTreatmentInitialDataTableFragment from "../fragments/AmineTreatmentInitialDataTableFragment.jsx";

const InputTable = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const parentComponentName = useContext(ParentContext);

  const simpleIsoData = useSelector((state) => state.simpleIso);
  const amineTreatmentData = useSelector((state) => state.amineTreatment);
  const [getSimpleIsoRes, IsoResults] = useSimpleIsoMutation();
  const [getAmineTreatmentRes, AmineResults] = useAmineTreatmentMutation();

  let dataToAI = {};
  let tableFragment = <></>;

  switch (parentComponentName) {
    case "simple-isomerization":
      dataToAI = {
        vesselVolume: simpleIsoData.vessel_volume,
        feedMassFlow: simpleIsoData.feed_mass_flow,
        feedTemperature: simpleIsoData.feed_temperature,
      };
      tableFragment = <SimpleIsoInitialDataTableFragment caption={caption} initialValues={initialValues} />;
      break;

    case "amine-treatment":
      dataToAI = { ...amineTreatmentData };
      tableFragment = (
        <AmineTreatmentInitialDataTableFragment caption={caption} initialValues={initialValues} />
      );
  }

  const handleCalculation = async (e) => {
    e.preventDefault();

    let calculationRes;

    switch (parentComponentName) {
      case "simple-isomerization":
        if (simpleIsoCheck(dataToAI) instanceof Error) {
          return null;
        } else {
          calculationRes = await getSimpleIsoRes(simpleIsoData);
          dispatch(setSimpleIsoRes(calculationRes.data));
        }
        break;

      case "amine-treatment":
        await getAmineTreatmentRes(amineTreatmentData);
        console.log("OOOOOOOOOOOOOOOOO", amineTreatmentData);
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
