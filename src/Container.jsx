import App from "./App";
import "./Container.css";
import Navbar from "./components/ui/Navbar";
import RightImage from "./assets/Right Image.png";
import LeftImage from "./assets/left.png"
import Logo from "./assets/FoodFlow_Logo.png"

export default function Container() {
  return (
    <>
      <div className="background"></div> {/* Blurred Background */}
      {/* <img src={Logo} style={{ height: "50px", width: "300px", marginLeft: "0px", marginTop: "0px" }} /> */}
      <div id="box">
        <img src={LeftImage} style={{ height: "400px", width: "auto", marginTop: "395px", marginRight: "25px" }} />
        <div id="container">
          <App />
        </div>
        <img src={RightImage} style={{ height: "400px", width: "auto", marginTop: "395px", marginLeft: "25px" }} />
      </div>
    </>
  );
}