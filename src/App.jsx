import Home from './Pages/LandingPage/HomePage'
import About from './Pages/AboutUs/AboutUs'
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/aboutus" element={<About />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
