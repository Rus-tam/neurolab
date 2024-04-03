import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut, selectCurrentUser } from "../../store/slices/authSlice.js";

const NavBar = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOut());
    navigate("/signin");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          NeuroLab
        </Link>
        <ul className="navbar-menu">
          <li className="navbar-item">
            <Link className="navbar-link" to="/">
              На главную
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/labs">
              Список работ
            </Link>
          </li>
          <li className="navbar-item">
            <Link className="navbar-link" to="/labs/my-works">
              Мои работы
            </Link>
          </li>
        </ul>
        <div className="navbar-registration">
          {currentUser ? (
            <button className="navbar-button" onClick={handleLogout}>
              Выйти
            </button>
          ) : (
            <>
              <button className="navbar-button" onClick={() => navigate("/signin")}>
                Войти
              </button>
              <button className="navbar-button" onClick={() => navigate("/signup")}>
                Регистрация
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
