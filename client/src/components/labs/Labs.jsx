import { useNavigate } from "react-router-dom";

const LabsList = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Список лабораторных работ</h1>
      <button onClick={() => navigate("/labs/simple-isomerization")}>
        Простая изомеризация
      </button>
      <button>Аминовая очистка кислых газов</button>
      <button>Низкотемпературная ректификация</button>
      <button onClick={() => navigate("/all-users")}>Список всех пользователей</button>
    </>
  );
};

export default LabsList;
