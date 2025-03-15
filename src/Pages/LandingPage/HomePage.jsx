import "./HomePage.css";
import NavbarImg from "../../assets/NavbarImg.webp"; // ✅ Fixed Path
import Navbar from "../../components/ui/Navbar"; // ✅ Fixed Path
import Card from "./Card";
import Tracker from "./Tracker";
import Why from "./Why";
import Footer from "../../components/ui/Footer"; // ✅ Fixed Path
import WhyGrid from "./WhyGrid";

function App() {
  return (
    <>
      <div id="app">
      {/* <div className="tracing-beam"></div>   */}
        <Navbar />
        <img src={NavbarImg} />
        <Card />
        <Tracker />
        <Why />
        <WhyGrid />
        <Footer />
      </div>
    </>
  );
}

export default App;
