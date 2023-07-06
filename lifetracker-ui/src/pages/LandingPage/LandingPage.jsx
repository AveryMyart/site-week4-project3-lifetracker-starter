import "./LandingPage.css"
import axios from 'axios'

function LandingPage() {

  async function handleLogin(event) {
    event.preventDefault()
    axios.get("/Login")
  }

  return (
    <div className="LandingPage">
      
      <button onClick={() => handleLogin()} >Login</button>
      <button onClick={() => handleRegister()} >Register</button>
    </div>
  )
}

export default LandingPage
