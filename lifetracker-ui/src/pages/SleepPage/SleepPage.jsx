import "./SleepPage.css"
import SleepForm from "../../components/SleepForm/SleepForm"

export default function SleepPage({setAppState, appState}) {
    return (
        <div className="registration-page">
            <SleepForm />
        </div>
    )
}