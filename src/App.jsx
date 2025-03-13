import Home from './Pages/LandingPage/HomePage'
import About from './Pages/AboutUs/AboutUs'
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import Home from "./Pages/LandingPage/HomePage";
import Donor from "./Pages/Donors/Donor";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about us" element={<Home />} />
          <Route path="/donors" element={<Donor />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
