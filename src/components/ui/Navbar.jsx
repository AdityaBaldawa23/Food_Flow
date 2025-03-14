import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <div id="navbar">
        <a href="index.html" id="logo">
          Food<span id="flow">Flow</span>
        </a>
        <div id="navbar-right">
          <a class="active" href="index" id="home-btn">Home</a>
          <a href="">About Us</a>
          <a href="Gallery/Gallery.html">Contact Us</a>
          <a href="Services/Services.html">
            <button class="donatebtn">Donate</button>
          </a>
          <a href="#section7">
            <button class="trackbtn">Track</button>
          </a>
        </div>
        <div id="toggle">
          <i class="fas fa-bars"></i>
        </div>
      </div>
    </>
  );
}
