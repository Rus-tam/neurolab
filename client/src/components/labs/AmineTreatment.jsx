import AmineAbsorber from "../../blueprints/amine-treatment/amine-treatment.svg";
import "../styles/amine-treatment.css";

const AmineTreatment = () => {
  return (
    <div className="amine_treatment">
      <img className="amine_absorber" src={AmineAbsorber} alt="amine-absorber" />

      <div className="container">
        <div className="vapour-container">
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 16 }}></span>
        </div>
        <div className="liquid-container">
          <span style={{ "--i": 11 }}></span>
          <span style={{ "--i": 12 }}></span>
          <span style={{ "--i": 10 }}></span>
          <span style={{ "--i": 18 }}></span>
          <span style={{ "--i": 20 }}></span>
          <span style={{ "--i": 14 }}></span>
          <span style={{ "--i": 13 }}></span>
          <span style={{ "--i": 16 }}></span>
        </div>
      </div>
    </div>
  );
};

export default AmineTreatment;
