import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from "./Pages/LandingPage/HomePage.jsx";
import Container from './Container.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Container />
  </StrictMode>,
)
