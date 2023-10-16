import { useContext } from "react";
import { ParentContext } from "../../utils/ParentContext.js";
import { useDispatch, useSelector } from "react-redux";
import { setSimpleIsoRes } from "../../store/slices/simpleIsoSlice.js";
import { useSimpleIsoMutation } from "../../store/apis/labsApiSlice.js";
import { simpleIsoCheck } from "../../utils/simple-iso-check.js";
import SimpleIsoInitialDataTableFragment from "../fragments/SimpleIsoInitialDataTableFragment.jsx";

const InputTable = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const parentComponentName = useContext(ParentContext);

  const simpleIsoData = useSelector((state) => state.simpleIso);
  const [getSimpleIsoRes, results] = useSimpleIsoMutation();

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
  }

  const handleCalculation = async (e) => {
    e.preventDefault();

    let calculationRes;

    switch (parentComponentName) {
      case "simple-isomerization":
        if (simpleIsoCheck(dataToAI) instanceof Error) {
          return null;
        } else {
          calculationRes = await getSimpleIsoRes(dataToAI);
          dispatch(setSimpleIsoRes(calculationRes.data));
        }
    }
  };

  return (
    <form onSubmit={handleCalculation}>
      {tableFragment}
      <button className="calculate-button" type="submit">
        Рассчитать
      </button>
    </form>
  );
};

export default InputTable;
