  import { useState } from "react";
  import Navbar from "../../components/ui/Navbar";
  import Footer from "../../components/ui/Footer";
  import "./NGO.css";
  import NGOConfirm from "../../assets/ngoconfirm.jpg";
  import SchedulePickupImg from "../../assets/SchedulePickupImg.webp";

  export default function NGO() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <div id="app">
          <Navbar />
          <div id="donor-section">
            <h1>NGOs</h1>
            <br />
            <p>
                Connecting Meals to those in needs.
            </p>
          </div>
          <div id="register-food">
            <div id="left">
              <h1>Confirm Deliveries</h1>
              <p>Ensure Impact</p>
              <div id="buttons">
                <button className="modal-toggle" onClick={() => setIsOpen(true)}>Confirm</button>
              </div>
            </div>
            <div id="right">
              <img src={NGOConfirm} alt="" style={{height: "200px"}}/>
            </div>
          </div>
          <div id="Schedule-Pickup">
            <div id="Schedule-left">
              <img src={SchedulePickupImg} alt="" />
            </div>
            <div id="Schedule-right">
              <h1>Request Food</h1>
              <p>Bridge the gap</p>
              <div id="buttons">
                <button>Request</button>
              </div>
            </div>
          </div>
          <Footer />
        </div>
        
        {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Sign in to our platform</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <label>Email</label>
                <input type="email" placeholder="name@company.com" required />
                
                <label>Password</label>
                <input type="password" placeholder="••••••••" required />
                
                <div className="remember-forgot">
                  <label>
                    <input type="checkbox" /> Remember me
                  </label>
                  <a href="#">Lost Password?</a>
                </div>
                
                <button type="submit" className="submit-btn">Login</button>
                <p>Not registered? <a href="#">Create account</a></p>
              </form>
            </div>
          </div>
        </div>
      )}
      </>
    );
  }
