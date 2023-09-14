import { useEffect, useState } from "react";
import "../styles/signIn.css";
import { useLoginMutation } from "../../store/apis/authApiSlice.js";
import { selectCurrentUser, setCredentials } from "../../store/slices/authSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userInfoFromState = useSelector(selectCurrentUser);

  const [login, results] = useLoginMutation();

  useEffect(() => {
    if (userInfoFromState) {
      navigate("/");
    }
  }, [userInfoFromState]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { accessToken, user } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ user, accessToken }));

      if (!results.isError) {
        navigate("/");
      }
    } catch (err) {
      toast.error(err?.data?.message);
    }
  };

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
