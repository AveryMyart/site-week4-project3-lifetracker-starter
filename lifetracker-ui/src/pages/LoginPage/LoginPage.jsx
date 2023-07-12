import "./LoginPage.css"
import LoginForm from "../../components/LoginForm/LoginForm"

export default function LoginPage({appState ,setAppState}) {
    console.log("LoginPage", appState)
    return (
        <div className="login-page">
            <LoginForm setAppState={setAppState} appState={appState}/>
        </div>
    )
}