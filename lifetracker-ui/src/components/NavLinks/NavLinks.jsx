import "./Navlinks.css";
import { Link } from "react-router-dom";

export default function NavLinks({ appState, setAppState }) {
  if (!appState.user) {
    return (
      <div className="nav-links">
        <div className="links">
          <div>
            <Link to="/activity">Activity</Link>
          </div>
          <div>
            <Link to="/sleep">Sleep</Link>
          </div>
          <div>
            <Link to="/login">Login</Link>
          </div>
          <div>
            <Link to="/register">Sign Up</Link>
          </div>
        </div>
      </div>
    );
  } else {
    function logoutUser() {
      setAppState({ user: "" });
    }
    return (
      <div className="nav-links">
        <div className="links">
          <div>
            <Link to="/activity">Activity</Link>
          </div>
          <div onClick={logoutUser}>Log Out</div>
        </div>
      </div>
    );
  }
}
