import "./Navbar.css";
import { Link } from "react-router-dom";
import NavLinks from "../NavLinks/NavLinks"

export default function Navbar({ appState, setAppState }) {

  return (
    
    <nav className="Navbar">
        <div className="logo">
          <Link to="/">
            <img src="https://freepngimg.com/download/vector/24144-6-vector-file.png" alt="codepath logo" className="logo"/>
          </Link>
        </div>
        <NavLinks appState={appState} setAppState={setAppState}/> 
    </nav>
  );
}
