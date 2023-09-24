import { useNavigate } from "react-router-dom";
import Isomer from "../../blueprints/labs-list/isomer.svg";
import "../styles/labs.css";

const LabsList = () => {
  const navigate = useNavigate();
  return (
    <div className="labs-list">
      <div className="card">
        <div className="card-picture">
          <img className="isomer" src={Isomer} alt="isomer" />
        </div>

        <div>
          <p>Простая изомеризация</p>
        </div>

        <div className="card-details">
          <ul>
            <li>Модель изомеризации в жидкой фазе</li>
            <li>
              Зависимости влияния температуры и расхода сырья, а также объема реактора
            </li>
            <li>Сложность: простая</li>
          </ul>
        </div>

        <button onClick={() => navigate("/labs/simple-isomerization")}>
          Перейти к работе
        </button>
      </div>

      <div className="card">
        {/*<div>*/}
        {/*  <img className="amine" src={Amine} alt="amine" />*/}
        {/*</div>*/}

        <div>
          <p>Аминовая очистка</p>
        </div>

        <button onClick={() => navigate("/labs/amine-treatment")}>
          Перейти к работе
        </button>
      </div>

      <div className="card">
        <button>Низкотемпературная ректификация</button>
      </div>

      {/*<button onClick={() => navigate("/all-users")}>Список всех пользователей</button>*/}
    </div>
  );
};

export default LabsList;
