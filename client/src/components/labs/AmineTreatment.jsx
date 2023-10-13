import AmineAbsorber from "../../blueprints/amine-treatment/amine-treatment.svg";
import "../styles/amine-treatment.css";

const AmineTreatment = () => {
  return (
    <div className="amine_treatment">
      <img className="amine_absorber" src={AmineAbsorber} alt="amine-absorber" />

      <div className="steam_container">
        <div className="steam">
          <div className="steam_1"></div>
          <div className="steam_2"></div>
          <div className="steam_3"></div>
        </div>
      </div>

      {/*<div className="steam_container">*/}
      {/*  <div id="steam_1" className="steam_1_1"></div>*/}
      {/*  <div id="steam_1" className="steam_1_2"></div>*/}
      {/*  <div id="steam_1" className="steam_1_3"></div>*/}
      {/*  <div id="steam_1" className="steam_1_4"></div>*/}

      {/*  <div id="steam_2" className="steam_2_1"></div>*/}
      {/*  <div id="steam_2" className="steam_2_2"></div>*/}
      {/*  <div id="steam_2" className="steam_2_3"></div>*/}
      {/*  <div id="steam_2" className="steam_2_4"></div>*/}
      {/*</div>*/}
    </div>
  );
};

export default AmineTreatment;
