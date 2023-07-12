import "./SleepPage.css";
import SleepForm from "../../components/SleepForm/SleepForm";
import { useEffect } from "react";
import axios from "axios";
import Tile from "../../components/Tile/Tile";

export default function SleepPage({ setAppState, appState }) {
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
        setAppState((prevState) => ({ ...prevState, sleep: sleepData.data.sleep }));
      }
    }
    getSleepData();
  }, []);

  console.log(appState.sleep)

//   if (appState.sleep.length > 1) {
//     return (
//       <div className="registration-page">
//         <SleepForm setAppState={setAppState} appState={appState} />
//         <div id="sleep-grid"></div>
//         {/* <h2>heheheh</h2> */}
//         {appState.sleep.map((tileObject) => {
//           return (
//             <Tile
//               tileObject={tileObject}
//             />
//           );
//         })}
//       </div>
//     );
//   } else {
    return (
      // use relevant data to hydrate the webpage
      <div className="registration-page">
        <SleepForm setAppState={setAppState} appState={appState} />
      </div>
    );
//   }
}
