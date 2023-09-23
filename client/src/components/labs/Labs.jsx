import { useNavigate } from "react-router-dom";
import "../styles/labs.css";

const LabsList = () => {
  const navigate = useNavigate();
  return (
    <div className="labs-list">
      <div className="lab-frame">
        <button onClick={() => navigate("/labs/simple-isomerization")}>
          Простая изомеризация
        </button>
      </div>

      <div className="lab-frame">
        <button>Аминовая очистка кислых газов</button>
      </div>

      <div className="lab-frame">
        <button>Низкотемпературная ректификация</button>
      </div>

      {/*<button onClick={() => navigate("/all-users")}>Список всех пользователей</button>*/}
    </div>
  );
};

export default LabsList;
