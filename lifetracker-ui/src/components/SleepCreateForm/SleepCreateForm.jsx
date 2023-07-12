import "./SleepCreateForm.css";
import axios from "axios";
import {useState} from 'react'
import { useNavigate } from "react-router-dom";


export default function SleepCreateForm({ setAppState, appState }) {
  const navigate = useNavigate();
  const [sleepData, setSleepData] = useState({
    start_time: "",
    end_time: ""
  })

  console.log("SleepCreateForm",appState);

  const handleChange =(event)=>{
    const {name, value} = event.target;
    setSleepData((prev)=>({...prev, [name]: value}))
  }
  /**
   * TODO:
   * 1. add sleep form info to post object (not just the token)
   * 2. insert into the table the relevent information
   * 3. let the user know it worked or failed
   */


  async function onSubmit(event) {
    event.preventDefault();
    let token = localStorage.getItem('token')
    const params = {
      start_time: sleepData.start_time,
      end_time: sleepData.end_time,
      token: token
    }
    console.log(params)
    if (token) {
      let response = await axios.post('http://localhost:3001/sleep/create', params)
      console.log(response.data)
      navigate('/sleep')
    }

  }

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
                      <h2 className="chakra-heading css-j6rr3f">
                        Record Sleep
                      </h2>
                      <div className="css-ebzegt">
                        <form onSubmit={onSubmit}>
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
                                  name="start_time"
                                  type="datetime-local"
                                  placeholder="Start Time"
                                  id="field-:re:"
                                  required=""
                                  aria-required="true"
                                  className="chakra-input css-p20xy6"
                                  
                                  value={sleepData.start_time}
                                  onChange={handleChange}
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
                                  name="end_time"
                                  type="datetime-local"
                                  placeholder="End Time"
                                  id="field-:rf:"
                                  required=""
                                  aria-required="true"
                                  className="chakra-input css-p20xy6"
                                  
                                  value={sleepData.end_time}
                                  onChange={handleChange}
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
