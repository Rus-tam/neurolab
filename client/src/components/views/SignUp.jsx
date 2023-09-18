import { useState } from "react";
import "../styles/signUp.css";

const SignUp = () => {
  // const navigate = useNavigate();
  const [group, setGroup] = useState("");
  const [email, setEmail] = useState("");
  const [student1, setStudent1] = useState("");
  const [student2, setStudent2] = useState("");
  const [student3, setStudent3] = useState("");
  const [professor, setProfessor] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const handleRegister = () => {};

  return (
    <>
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
            value={professor}
            onChange={(e) => setProfessor(e.target.value)}
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
