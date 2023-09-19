import { useEffect, useState } from "react";
import "../styles/signUp.css";
import Spinner from "../layout/Spinner.jsx";
import { useRegisterMutation } from "../../store/apis/authApiSlice.js";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/slices/authSlice.js";

const SignUp = () => {
  const navigate = useNavigate();
  const [group, setGroup] = useState("");
  const [email, setEmail] = useState("");
  const [student1, setStudent1] = useState("");
  const [student2, setStudent2] = useState("");
  const [student3, setStudent3] = useState("");
  const [professorName, setProfessorName] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const currentUser = useSelector(selectCurrentUser);

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser]);

  const [register, results] = useRegisterMutation();

  let registerResult;

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (
        group.length === 0 ||
        email.length === 0 ||
        student1.length === 0 ||
        professorName.length === 0 ||
        password.length === 0 ||
        repeatPassword.length === 0
      ) {
        toast.error("Заполните все обязательные поля");
      } else if (password === repeatPassword) {
        registerResult = await register({
          group,
          email,
          student1,
          student2,
          student3,
          professorName,
          password,
          role: "STUDENT",
        }).unwrap();
        if (registerResult) {
          navigate("/signin");
        }
      } else {
        toast.error("Введенные пароли не совпадают");
      }
    } catch (err) {
      toast.error(err?.message);
    }
  };

  return (
    <>
      <Spinner isLoading={results.isLoading} />
      <form className="signUp-form">
        <div>
          <label>Группа*:</label>
          <input
            type="text"
            value={group}
            onChange={(e) => setGroup(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Эл. почта*:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>ФИО студента №1*:</label>
          <input
            type="text"
            value={student1}
            onChange={(e) => setStudent1(e.target.value)}
            required
          />
        </div>
        <div>
          <label>ФИО студента №2:</label>
          <input
            type="text"
            value={student2}
            onChange={(e) => setStudent2(e.target.value)}
          />
        </div>
        <div>
          <label>ФИО студента №3:</label>
          <input
            type="text"
            value={student3}
            onChange={(e) => setStudent3(e.target.value)}
          />
        </div>

        <div>
          <label>ФИО преподавателя*:</label>
          <input
            type="text"
            value={professorName}
            onChange={(e) => setProfessorName(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Пароль*:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Повторите пароль*:</label>
          <input
            type="password"
            value={repeatPassword}
            onChange={(e) => setRepeatPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <p>* Обязательные для заполнения поля</p>
        </div>
        <button onClick={handleRegister}>Завершить регистрацию</button>
      </form>
    </>
  );
};

export default SignUp;
