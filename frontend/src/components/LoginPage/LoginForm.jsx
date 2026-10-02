import { useContext } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/app-context.js";
import { useState } from "react";
import { useHttpClient } from "../../hooks/http-hook";
// import { useTranslation } from "react-i18next";
import Loader from "../containers/LoadingCard";

const LoginForm = () => {
//   const { t } = useTranslation();
  const auth = useContext(AuthContext);
  const { sendRequest } = useHttpClient();
  const [isLoading, setIsLoading] = useState(false);
  const [loginValues, setLoginValues] = useState({
    username: "",
    password: "",
  });

  const handleLoginChange = (id, value) => {
    setLoginValues((prevValue) => ({
      ...prevValue,
      [id]: value,
    }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try {
      setIsLoading(true);
      const reponse = await sendRequest(
        (import.meta.env.VITE_BACKEND_URL || "http//localhost:3000/api/") +
          "users/login",
        "POST",
        JSON.stringify(loginValues),
        {
          "Content-Type": "application/json",
        },
      );
      auth.login(reponse.userId, reponse.token);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
    {/* <SmallHeader/> */}
      <div className="spinner"> {isLoading && <Loader />}</div>
      <div className="form-card">
        <h1>login :)</h1>
        <form onSubmit={submitHandler}>
          <div className="label-input">
            <input
              id="username"
              type="text"
              name="username"
              autoComplete="username"
              placeholder="nom d'utilisateur"
              onChange={(event) =>
                handleLoginChange("username", event.target.value)
              }
              value={loginValues.username}
            />
          </div>
          <div className="label-input">
            <input
              id="password"
              type="password"
              name="password"
              autoComplete="current-password"
              placeholder="mot de passe"
              onChange={(event) =>
                handleLoginChange("password", event.target.value)
              }
              value={loginValues.password}
            />
          </div>

          <div>
            <Link to="/register">
              <button>pas de compte?</button>
            </Link>
            <button type="submit">entrer</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
