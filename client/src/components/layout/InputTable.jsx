import { useContext } from "react";
import { ParentContext } from "../../utils/ParentContext.js";
import { useDispatch, useSelector } from "react-redux";
import { setSimpleIsoRes } from "../../store/slices/simpleIsoSlice.js";
import { useSimpleIsoMutation } from "../../store/apis/labsApiSlice.js";
import { simpleIsoCheck } from "../../utils/simple-iso-check.js";
import SimpleIsoInitialDataTableFragment from "../fragments/SimpleIsoInitialDataTableFragment.jsx";
import AmineTreatmentInitialDataTableFragment from "../fragments/AmineTreatmentInitialDataTableFragment.jsx";

const InputTable = ({ caption, initialValues }) => {
  const dispatch = useDispatch();
  const parentComponentName = useContext(ParentContext);

  const simpleIsoData = useSelector((state) => state.simpleIso);
  const amineTreatmentData = useSelector((state) => state.amineTreatment);
  const [getSimpleIsoRes, results] = useSimpleIsoMutation();

  console.log("RRRRRRRRRRRRr", amineTreatmentData);

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
      dataToAI = {
        sourGasTemperature: amineTreatmentData.sour_gas_temperature,
        sourGasMassFlow: amineTreatmentData.sour_gas_mass_flow,
        sourGasPressure: amineTreatmentData.sour_gas_pressure,
        sourGas_co2: amineTreatmentData.sour_gas_co2,
        sourGas_ch4: amineTreatmentData.sour_gas_ch4,
        sourGas_c2h8: amineTreatmentData.sour_gas_c2h6,
        sourGas_c3h8: amineTreatmentData.sour_gas_c3h8,
        sourGas_ic4h10: amineTreatmentData.sour_gas_ic4h10,
        sourGas_nc4h10: amineTreatmentData.sour_gas_nc4h10,
        sourGas_ic5h12: amineTreatmentData.sour_gas_ic5h12,
        sourGas_nc5h12: amineTreatmentData.sour_gas_nc5h12,
        sourGas_h2s: amineTreatmentData.sour_gas_h2s,
        sourGas_h2o: amineTreatmentData.sour_gas_h2o,
        sourGas_MDEA: amineTreatmentData.sour_gas_MDEA,
        amineTemperature: amineTreatmentData.amine_temperature,
        amineMassFlow: amineTreatmentData.amine_mass_flow,
        aminePressure: amineTreatmentData.amine_pressure,
        amine_co2: amineTreatmentData.amine_co2,
        amine_ch4: amineTreatmentData.amine_ch4,
        amine_c2h6: amineTreatmentData.amine_c2h6,
        amine_c3h8: amineTreatmentData.amine_c3h8,
        amine_ic4h10: amineTreatmentData.amine_ic4h10,
        amine_nc4h10: amineTreatmentData.amine_nc4h10,
        amine_ic5h12: amineTreatmentData.amine_ic5h12,
        amine_nc5h12: amineTreatmentData.amine_nc5h12,
        amine_h2s: amineTreatmentData.amine_h2s,
        amine_h20: amineTreatmentData.amine_h2o,
        amine_MDEA: amineTreatmentData.amine_MDEA,
      };

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
          calculationRes = await getSimpleIsoRes(dataToAI);
          dispatch(setSimpleIsoRes(calculationRes.data));
        }

      case "amine-treatment":
        console.log("OOOOOOOOOOOOOOOOO", dataToAI);
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
