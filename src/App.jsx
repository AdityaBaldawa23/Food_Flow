import Home from './Pages/LandingPage/HomePage'
import About from './Pages/AboutUs/AboutUs'
import Donor from "./Pages/Donors/Donor";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import NGO from './Pages/NGOs/NGO'
import Volunteer from './Pages/Volunteer/Volunteer'
function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/donors" element={<Donor />} />
          <Route path="/NGOs" element={<NGO />} />
          <Route path="/Volunteer" element={<Volunteer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
