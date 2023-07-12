import "./LoginForm.css";
import { useState } from "react";
import axios from "axios";
import apiClient from "../../../../services/apiClient";
import { useNavigate } from "react-router-dom";

export default function LoginForm({ appState, setAppState }) {
  console.log("top of LoginForm", appState)
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState();
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }


  async function loginUser(event) {
    event.preventDefault();
    setIsLoading(true);
    setErrors((event) => ({ ...event, form: null }));

    const token = await apiClient.loginUser({
      email: loginForm.email,
      password: loginForm.password,
    });

    console.log(token);
    if (token.data) {
      console.log("LoginForm", appState);
      setAppState((prevState) => ({
        ...prevState,
        user: loginForm.email,
        isAuthenticated: true,
      }));
      localStorage.setItem("token", token.data);
      console.log(appState);
      setIsLoading(false);

      setLoginForm({
        email: "",
        password: "",
      });

      navigate("/activity");
    }
  }

  // async function loginUser(event) {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   setErrors((event) => ({ ...event, form: null }));

  //   const token = await apiClient.loginUser({
  //     email: loginForm.email,
  //     password: loginForm.password,
  //   });
  //   localStorage.setItem("token", token.data)
   
    // if (error) setErrors((event) => ({ ...event, loginForm: error }))
    //   console.log(data.user)
    // if (data.user) {
    //   setUser(data.user);
    //   apiClient.setToken(data.token);
    //   navigate("/activity");
    // }
    // setIsLoading(false)
    // console.log('setting app data to', data.user)
    // setAppState(data.user)
    // setLoginForm({
    //   email: "",
    //   password: "",
    // });
  // }

  function handleOnChange(event) {
    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1)
        setErrors((event) => ({ ...event, email: "Please enter a valid email" }));
      else {
        setErrors((event) => ({ ...event, email: null }));
      }
    }

    setLoginForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  }
  return (
    <div className="login-form">
      <h2>Login</h2>
      <div className="card">
        <form>
          <input
            className="form-input"
            value={loginForm.email}
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleOnChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
          <input
            className="form-input"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={loginForm.password}
            onChange={handleOnChange}
          />
          {errors.password && <span className="error">{errors.password}</span>}
          <div className="show-password-button">
            <input type="checkbox" onClick={handleShowPassword} />
            Show Password
          </div>
          <button
            className="submit-login"
            disabled={isLoading}
            onClick={loginUser}
          >
            {isLoading ? "Loading... " : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
