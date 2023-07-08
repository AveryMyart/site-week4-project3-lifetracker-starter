import "./Navlinks.css";
import { Link } from "react-router-dom";

export default function NavLinks({ appState, setAppState }) {

  function logoutUser(){
    localStorage.setItem('token', null)
    setAppState("")
  }

  return (
    <div className="nav-links">
      <div className="links">
        <div>
          <Link to="/activity">Activity</Link>
        </div>
        <div>
          <Link to="/sleep">Sleep</Link>
        </div>
        {
          appState.user ?
            <div onClick={logoutUser}>Log Out</div>
            :
            (
              <>
                <div>
                  <Link to="/login">Login</Link>
                </div>
                <div>
                  <Link to="/register">Sign Up</Link>
                </div>
              </>
            )
        }
      </div>
    </div>
  )
}
