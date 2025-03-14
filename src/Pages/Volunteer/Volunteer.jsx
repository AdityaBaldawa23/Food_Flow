import { useState } from "react";
import Navbar from "../../components/ui/Navbar";
import Footer from "../../components/ui/Footer";
import "./Volunteer.css";
import RegisterFoodImg from "../../assets/RegisterFoodImg.jpeg";
import SchedulePickupImg from "../../assets/SchedulePickupImg.webp";
import Modal from "../Donors/ModalDonor";

export default function Volunteer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div id="app">
        <Navbar />
        <div id="donor-section">
          <h1>Volunteers</h1>
          <br />
          <p>Deliver Food, Spread Hope!!</p>
        </div>
        <div id="register-food">
          <div id="left">
            <h1>Accept Task</h1>
            <p>Take a task, change a life</p>
            <div id="buttons">
              <button className="modal-toggle" onClick={() => setIsOpen(true)}>
                Accept Task
              </button>
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
            <h1>Quality Check</h1>
            <p>Ensure Freshness</p>
            <div id="buttons">
              <button>Go to chatbot</button>
            </div>
          </div>
        </div>
        <div id="Donation">
          <div id="Donation-left">
            <h1>Check Rewards</h1>
            <p>Your Impact, your rewards</p>
            <div id="buttons">
              <button>Claim Rewards</button>
            </div>
          </div>
          <div id="Donation-right">
            <img src={SchedulePickupImg} alt="" />
          </div>
        </div>
        <Footer />
      </div>

      {isOpen && (
        <div className="modal-overlay" onClick={() => setIsOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Food Donation Filters</h3>
              <button className="close-btn" onClick={() => setIsOpen(false)}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <form>
                <label>Food Type</label>
                <div className="food-type">
                  <button type="button" className="food-btn veg">
                    VEG
                  </button>
                  <button type="button" className="food-btn non-veg">
                    NON-VEG
                  </button>
                </div>

                <label>Min. Servings</label>
                <input
                  type="number"
                  placeholder="Enter min. servings"
                  required
                />

                <label>Food Category</label>
                <div className="food-category">
                  <button type="button" className="category-btn">
                    HOTELS
                  </button>
                  <button type="button" className="category-btn">
                    EVENTS
                  </button>
                  <button type="button" className="category-btn">
                    WEDDINGS
                  </button>
                </div>

                <label>Estimated Food</label>
                <div className="food-estimation">
                  <input type="number" placeholder="No. of servings" required />
                  <input type="number" placeholder="No. of dishes" required />
                </div>

                <button type="submit" className="next-btn">
                  NEXT
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
