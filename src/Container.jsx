import App from "./App";
import "./Container.css";
import RightImage from "./assets/Right Image.png";
import LeftImage from "./assets/left.png";
import Logo from "./assets/FoodFlow_Logo.png";

export default function Container() {
  return (
    <>
      <div class="background">
        <video autoPlay muted loop>
          <source src= "./assets/back.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div id="box">
        <img
          src={LeftImage}
          style={{
            height: "500px",
            width: "auto",
            marginTop: "395px",
            marginRight: "25px",
          }}
        />
        <div id="container">
          <App />
        </div>
        <img
          src={RightImage}
          style={{
            height: "500px",
            width: "auto",
            marginTop: "395px",
            marginLeft: "25px",
          }}
        />
      </div>
    </>
  );
}
