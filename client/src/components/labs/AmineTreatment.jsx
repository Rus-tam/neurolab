import AmineAbsorber from "../../blueprints/amine-treatment/amine-treatment.svg";
import "../styles/amine-treatment.css";

const AmineTreatment = () => {
  return (
    <div className="amine_treatment">
      <img className="amine_absorber" src={AmineAbsorber} alt="amine-absorber" />

      <div className="vapour-container">
        <div className="vapour"></div>
        <div className="vapour"></div>
        <div className="vapour"></div>
        <div className="vapour"></div>
        <div className="vapour"></div>
        <div className="vapour"></div>
        <div className="vapour"></div>
        <div className="vapour"></div>
        <div className="vapour"></div>
        <div className="vapour"></div>
      </div>
    </div>
  );
};

export default AmineTreatment;
