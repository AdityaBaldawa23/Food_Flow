  import { useState } from "react";
  import Navbar from "../../components/ui/Navbar";
  import "./Donor.css";
  import RegisterFoodImg from "../../assets/RegisterFoodImg.jpeg";
  import SchedulePickupImg from "../../assets/SchedulePickupImg.webp";
  import Modal from "./ModalDonor";

  export default function Donor() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <div id="app">
          <Navbar />
          <div id="donor-section">
            <h1>Donors</h1>
            <br />
            <p>
              Turn Your Surplus into Someone's Meal. Donate Food, make a diff.
            </p>
          </div>
          <div id="register-food">
            <div id="left">
              <h1>Register Food</h1>
              <p>Share Excess, Reduce Waste, Feed Communities</p>
              <div id="buttons">
                <button className="modal-toggle" onClick={() => setIsOpen(true)}>Add Details</button>
                <button>Select Pickup Location</button>
              </div>
            </div>
            <div id="right">
              <img src={RegisterFoodImg} alt="" />
            </div>
          </div>
          <div id="Schedule-Pickup">
            <div id="Schedule-left">
              <img src={SchedulePickupImg} alt="" />
            </div>
            <div id="Schedule-right">
              <h1>Schedule Pickup</h1>
              <p>Choose a time, and let us handle</p>
              <div id="buttons">
                <button>Select TimeSlot</button>
                <button>Reschedule</button>
              </div>
            </div>
          </div>
          <div id="Donation">
            <div id="Donation-left">
              <h1>Check Donation History</h1>
              <p>Track Your Impact</p>
              <div id="buttons">
                <button>Check</button>
                <button>Share</button>
              </div>
            </div>
            <div id="Donation-right">
              <img src={SchedulePickupImg} alt="" />
            </div>
          </div>
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
