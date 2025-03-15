import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div id="navbar">
      <Link to="/home" id="logo">
        Food<span id="flow">Flow</span>
      </Link>

      <div id="navbar-right">
        <Link to="/home" className="active" id="home-btn">Home</Link>
        <Link to="/aboutus">About Us</Link>
        <Link to="/NGOs">NGOs</Link>

        {/* Using onClick with navigate() for buttons */}
        <button className="donatebtn" onClick={() => navigate("/donors")}>
          Donate
        </button>
        <button className="trackbtn" onClick={() => navigate("/volunteer")}>
          Volunteer
        </button>
      </div>

      <div id="toggle">
        <i className="fas fa-bars"></i>
      </div>
    </div>
  );
}
