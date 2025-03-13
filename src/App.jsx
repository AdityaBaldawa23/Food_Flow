import Home from './Pages/LandingPage/HomePage'
import { Routes, Route } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/about us" element={<Home />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
