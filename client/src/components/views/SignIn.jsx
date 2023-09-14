import { useState } from "react";
import "../styles/signIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {};

  return (
    <>
      <form className="login-form">
        <div>
          <label>Почта: </label>
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          <label>Пароль: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button onClick={handleLogin}>Войти</button>
      </form>
    </>
  );
};

export default SignIn;
