import "./SleepCreateForm.css"
import { useState } from "react";

// import "./LoginForm.css";
// import { useState } from "react";
// import axios from "axios";
// import apiClient from "../../../../services/apiClient";
// import { useNavigate } from "react-router-dom";

export default function SleepCreateForm({setAppState, appState}) {
  // const navigate = useNavigate();
  // const [showPassword, setShowPassword] = useState(false);
  // const [isLoading, setIsLoading] = useState(false);
  // const [loginForm, setLoginForm] = useState({
  //   email: "",
  //   password: "",
  // });
  // const [errors, setErrors] = useState({});
  // const [user, setUser] = useState();
  // function handleShowPassword() {
  //   setShowPassword(!showPassword);
  // }

  // async function loginUser(event) {
  //   event.preventDefault();
  //   setIsLoading(true);
  //   setErrors((event) => ({ ...event, form: null }));

  //   const { data, error } = await apiClient.loginUser({
  //     email: loginForm.email,
  //     password: loginForm.password,
  //   });
  //   if (error) setErrors((event) => ({ ...event, loginForm: error }))
  //     console.log(data.user)

  //   if (data.user) {
  //     setUser(data.user);
  //     apiClient.setToken(data.token);
  //     navigate("/activity");
  //   }
  //   setIsLoading(false)
  //   setLoginForm({
  //     email: "",
  //     password: "",
  //   });
  // }

  // function handleOnChange(event) {
  //   if (event.target.name === "email") {
  //     if (event.target.value.indexOf("@") === -1)
  //       setErrors((event) => ({ ...event, email: "Please enter a valid email" }));
  //     else {
  //       setErrors((event) => ({ ...event, email: null }));
  //     }
  //   }}


  //   setLoginForm((f) => ({ ...f, [event.target.name]: event.target.value }));

    return (
      <div className="sleep-create-form">
        <div className="SleepPage css-1bpnzr3">
          <div className="css-k2eq80">
            <div className="chakra-stack css-1cgbrw5">
              <h2 className="chakra-heading css-b5coes">Sleep</h2>
            </div>
          </div>
          <div className="css-vpbd2d">
            <div className="css-0">
              <div className="css-pwgvc2">
                <div className="chakra-stack css-1jtnem3">
                  <div className="css-1hv8zgx">
                    <div></div>
                    <div className="css-mlsaez">
                      <div className="chakra-stack css-13ra036">
                        <h2 className="chakra-heading css-j6rr3f">Record Sleep</h2>
                        <div className="css-ebzegt">
                          <form>
                            <div className="chakra-stack css-1db3zf7">
                              <div
                                role="group"
                                className="chakra-form-control css-1kxonj9"
                              >
                                <label
                                  id="field-:re:-label"
                                  htmlFor="field-:re:"
                                  className="chakra-form__label css-g6pte"
                                >
                                  Start Time
                                  <span
                                    role="presentation"
                                    aria-hidden="true"
                                    className="chakra-form__required-indicator css-1tfjd1n"
                                  >
                                    *
                                  </span>
                                </label>
                                <div
                                  className="chakra-input__group css-bx0blc"
                                  data-group="true"
                                >
                                  <input
                                    name="startTime"
                                    type="datetime-local"
                                    placeholder="Start Time"
                                    id="field-:re:"
                                    required=""
                                    aria-required="true"
                                    className="chakra-input css-p20xy6"
                                    defaultValue=""
                                  />
                                </div>
                              </div>
                              <div
                                role="group"
                                className="chakra-form-control css-1kxonj9"
                              >
                                <label
                                  id="field-:rf:-label"
                                  htmlFor="field-:rf:"
                                  className="chakra-form__label css-g6pte"
                                >
                                  End Time
                                  <span
                                    role="presentation"
                                    aria-hidden="true"
                                    className="chakra-form__required-indicator css-1tfjd1n"
                                  >
                                    *
                                  </span>
                                </label>
                                <div
                                  className="chakra-input__group css-bx0blc"
                                  data-group="true"
                                >
                                  <input
                                    name="endTime"
                                    type="datetime-local"
                                    placeholder="End Time"
                                    id="field-:rf:"
                                    required=""
                                    aria-required="true"
                                    className="chakra-input css-p20xy6"
                                    defaultValue=""
                                  />
                                </div>
                              </div>
                              <button
                                type="submit"
                                className="chakra-button css-1hnyqz6"
                              >
                                Save
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}