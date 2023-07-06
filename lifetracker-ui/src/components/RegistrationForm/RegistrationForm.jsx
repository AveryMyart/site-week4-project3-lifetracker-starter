import "./RegistrationForm.css";
import { useState } from "react";
import axios from "axios";
import apiClient from "../../../../services/apiClient";
import { useNavigate } from "react-router-dom";

export default function RegistrationForm({ setAppState }) {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [regForm, setRegForm] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (event) => {
    if (event.target.name === "password") {
      if (
        regForm.passwordConfirm &&
        regForm.passwordConfirm !== event.target.value
      ) {
        setErrors((err) => ({
          ...err,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((err) => ({ ...err, passwordConfirm: null }));
      }
    }

    if (event.target.name === "passwordConfirm") {
      if (regForm.password && regForm.password !== event.target.value) {
        setErrors((err) => ({
          ...err,
          passwordConfirm: "Password's do not match",
        }));
      } else {
        setErrors((err) => ({ ...err, passwordConfirm: null }));
      }
    }

    if (event.target.name === "email") {
      if (event.target.value.indexOf("@") === -1) {
        setErrors((err) => ({ ...err, email: "Please enter a valid email." }));
      } else {
        setErrors((err) => ({ ...err, email: null }));
      }
    }

    setRegForm((f) => ({ ...f, [event.target.name]: event.target.value }));
  };
console.log(regForm)
  function handleShowPassword() {
    setShowPassword(!showPassword);
  }

  async function signupUser() {
    setErrors((event) => ({ ...event, regForm: null }));
    setIsLoading(true);
    if (regForm.password !== regForm.passwordConfirm) {
      setErrors((event) => ({ ...event, passwordConfirm: "Passwords do not match." }));
      setIsLoading(false);
      return;
    } else {
      setErrors((event) => ({ ...event, passwordConfirm: null }));
    }

    const { data, error } = await apiClient.signupUser({
      email: regForm.email,
      password: regForm.password,
      username: regForm.username,
      first_name: regForm.firstName,
      last_name: regForm.lastName
    });
    if (error) setErrors((event) => ({ ...event, regForm: error }));
    if (data?.user) {
      console.log(data)
      setAppState(data.user);
      apiClient.setToken(data.token);
      navigate("/")
    }
    setIsLoading(false);

    setRegForm({
      username: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      passwordConfirm: "",
    });
  }

  return (
    <div className="registration-form">
      <h2>Sign Up</h2>
      <form className="card">
        <input
          className="form-input"
          type="text"
          name="email"
          value={regForm.email}
          onChange={handleChange}
          placeholder="Example@email.com"
          required
        />
        {errors.email && <span className="errors">{errors.email}</span>}
        <input
          className="form-input"
          type="text"
          name="username"
          value={regForm.username}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <div className="reg-names">
          <input
            className="form-input"
            type="text"
            name="firstName"
            value={regForm.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            className="form-input"
            type="text"
            name="lastName"
            value={regForm.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            required
          />
        </div>
        <input
          className="form-input"
          type={showPassword ? "text" : "password"}
          name="password"
          value={regForm.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        {errors.password && <span className="errors">{errors.password}</span>}

        <input
          className="form-input"
          type={showPassword ? "text" : "password"}
          name="passwordConfirm"
          value={regForm.passwordConfirm}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
        />
        {errors.passwordConfirm && (
          <span className="errors">{errors.passwordConfirm}</span>
        )}
        <div className="show-password-button">
          <input
            className="form-input"
            type="checkbox"
            onClick={handleShowPassword}
            value={showPassword}
          />
          Show Password
        </div>
        <button
          className="submit-registration"
          disabled={isLoading}
          onClick={signupUser}
        >
          {isLoading ? "Loading... " : "Create Account"}
        </button>
      </form>
    </div>
  );
}
