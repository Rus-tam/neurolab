import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={() => navigate("/labs")}>
        Перейти к списку лабораторных работ
      </button>
    </div>
  );
};

export default Home;
