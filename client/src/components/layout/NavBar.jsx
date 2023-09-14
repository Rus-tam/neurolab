import { Link } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = () => {
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
            <Link className="navbar-link" to="/my-projects">
              Мои работы
            </Link>
          </li>
        </ul>
        <div className="navbar-registration">
          <Link to="/login" className="navbar-link">
            Войти
          </Link>
          <Link to="/signup" className="navbar-link">
            Регистрация
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
