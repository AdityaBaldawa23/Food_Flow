import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation(); // Get current path

  return (
    <div id="navbar">
      <Link to="/home" id="logo">
        Food<span id="flow">Flow</span>
      </Link>

      <div id="navbar-right">
        <Link to="/home" className={location.pathname === "/home" ? "active" : ""}>Home</Link>
        <Link to="/aboutus" className={location.pathname === "/aboutus" ? "active" : ""}>About Us</Link>
        <Link to="/NGOs" className={location.pathname === "/NGOs" ? "active" : ""}>NGOs</Link>

        {/* Buttons */}
        <button className={`donatebtn ${location.pathname === "/donors" ? "active" : ""}`} onClick={() => navigate("/donors")}>
          Donate
        </button>
        <button className={`trackbtn ${location.pathname === "/volunteer" ? "active" : ""}`} onClick={() => navigate("/volunteer")}>
          Volunteer
        </button>
      </div>

      <div id="toggle">
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}
