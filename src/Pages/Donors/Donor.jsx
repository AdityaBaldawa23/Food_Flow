import Navbar from "../../components/ui/Navbar";
import "./Donor.css";
import RegisterFoodImg from "../../assets/RegisterFoodImg.jpeg";
import SchedulePickupImg from "../../assets/SchedulePickupImg.webp";

export default function Donor() {
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
              <button>Add Details</button>
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
    </>
  );
}
