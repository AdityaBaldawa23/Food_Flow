  import { useState } from "react";
  import Navbar from "../../components/ui/Navbar";
  import Footer from "../../components/ui/Footer";
  import "./NGO.css";
  import NGOConfirm from "../../assets/ngoconfirm.jpg";
  import SchedulePickupImg from "../../assets/request.jpg";  

  export default function NGO() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <>
        <div id="app">
          <Navbar />
          <div id="NGO-section">
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
              <img src={SchedulePickupImg} alt="" style={{height: "200px"}}/>
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
              <h3>Food Donation Filters</h3>
              <button style={{backgroundColor: "red", width: "10px"}} className="close-btn" onClick={() => setIsOpen(false)}>&times;</button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <label>Food Type</label>
                <div className="food-type">
                  <button type="button" style={{backgroundColor: "green"}} className={`food-btn ${formData.foodType === "VEG" ? "active" : ""}`} onClick={() => handleFoodType("VEG")}>VEG</button>
                  <button type="button" style={{backgroundColor: "red"}} className={`food-btn ${formData.foodType === "NON-VEG" ? "active" : ""}`} onClick={() => handleFoodType("NON-VEG")}>NON-VEG</button>
                </div>

                <label>Min. Servings</label>
                <input type="number" name="minServings" placeholder="Enter min. servings" required onChange={handleChange} />

                <label>Food Category</label>
                <div className="food-category">
                  <button type="button" style={{backgroundColor: "black", width: "2px !important"}} className={`category-btn ${formData.foodCategory === "HOTELS" ? "active" : ""}`} onClick={() => handleFoodCategory("HOTELS")}>HOTELS</button>
                  <button type="button" className={`category-btn ${formData.foodCategory === "EVENTS" ? "active" : ""}`} onClick={() => handleFoodCategory("EVENTS")}>EVENTS</button>
                  <button type="button" className={`category-btn ${formData.foodCategory === "WEDDINGS" ? "active" : ""}`} onClick={() => handleFoodCategory("WEDDINGS")}>WEDDINGS</button>
                </div>

                <label>Estimated Food</label>
                <div className="food-estimation">
                  <input type="number" name="numKGs" placeholder="No. of KGs" required onChange={handleChange} />
                  <input type="number" name="numDishes" placeholder="No. of dishes" required onChange={handleChange} />
                </div>

                <button type="submit" className="next-btn">NEXT</button>
              </form>
            </div>
          </div>
        </div>
      )}
      </>
    );
  }
