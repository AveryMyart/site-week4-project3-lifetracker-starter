import "./SleepCreatePage.css"
import SleepCreateForm from "../../components/SleepCreateForm/SleepCreateForm"

export default function SleepCreatePage({setAppState, appState}) {
    return (
        <div className="registration-page">
            <SleepCreateForm appState={appState} />
        </div>
    )
}