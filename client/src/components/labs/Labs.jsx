import { useNavigate } from "react-router-dom";
import Isomer from "../../blueprints/labs-list/isomer.svg";
import Amine from "../../blueprints/labs-list/amine.svg";
import "../styles/labs.css";

const LabsList = () => {
  const navigate = useNavigate();
  return (
    <div className="labs-list">
      <div className="lab-frame">
        <div>
          <img className="isomer" src={Isomer} alt="isomer" />
        </div>

        <div>
          <p>Простая изомеризация</p>
        </div>

        <button onClick={() => navigate("/labs/simple-isomerization")}>
          Перейти к работе
        </button>
      </div>

      <div className="lab-frame">
        <div>
          <img className="amine" src={Amine} alt="amine" />
        </div>

        <div>
          <p>Аминовая очистка</p>
        </div>

        <button onClick={() => navigate("/labs/amine-treatment")}>
          Перейти к работе
        </button>
      </div>

      <div className="lab-frame">
        <button>Низкотемпературная ректификация</button>
      </div>

      {/*<button onClick={() => navigate("/all-users")}>Список всех пользователей</button>*/}
    </div>
  );
};

export default LabsList;
