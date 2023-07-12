import { Link } from "react-router-dom";
import "./SleepForm.css";
import { useEffect } from "react";
import Tile from "../Tile/Tile";
import axios from "axios";

export default function SleepForm({ appState, setAppState }) {
  useEffect(() => {
    async function getSleepData() {
      let token = localStorage.getItem("token");
      console.log(appState.user);

      if (token) {
        // here, we make a post to get relevent data
        console.log("appstate ", appState);
        console.log(appState.user);
        let sleepData = await axios.get(
          `http://localhost:3001/sleep?email=${appState?.user}`
        );
        console.log("sleepPage relevant data", sleepData.data.sleep);
        setAppState((prevState) => ({
          ...prevState,
          sleep: sleepData.data.sleep,
        }));
      }
    }
    getSleepData();
  }, []);

  console.log(appState.sleep);

  if (appState.isAuthenticated) {
    if (appState.sleep.length > 1) {
      return (
        <div className="registration-page">
          <span className="chakra-link button css-spn4bz">
            <Link to="create">
              <button type="button" className="add-sleep-bttn">
                Add Sleep
              </button>
            </Link>
          </span>
          <div id="sleep-grid"></div>
          {/* <h2>heheheh</h2> */}
          {appState.sleep.map((tileObject) => {
            return <Tile tileObject={tileObject} />;
          })}
        </div>
      );
    } else {
      return (
        <div className="sleep-page">
          <div className="header">
            <div className="chakra-stack css-1cgbrw5">
              <h2 className="chakra-heading css-b5coes">Sleep</h2>
            </div>
          </div>
          <div className="content">
            <div className="empty-sleep">
              <h2 className="chakra-heading css-hzsul0">Nothing here yet.</h2>
              <span className="chakra-link button css-spn4bz">
                <Link to="create">
                  <button type="button" className="add-sleep-bttn">
                    Add Sleep
                  </button>
                </Link>
              </span>
              <img
                src="https://lifetracker-ui-ai8e.onrender.com/assets/empty-bed-b93e7358.jpg"
                className="chakra-image css-ni3ua3"
              />
            </div>
          </div>
        </div>
      );
    }
  } else {
    return (
      <>
        <h2> Login to access this page</h2>
      </>
    );
  }
}
