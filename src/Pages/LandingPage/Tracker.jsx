import React from "react";
import "./Tracker.css";
import mealsIcon from "../../assets/meals.jpeg";
import volunteersIcon from "../../assets/trackervolun.jpg";
import foodSavedIcon from "../../assets/NavbarImg.webp";
import rewardsIcon from "../../assets/Volunteers.jpg";

const trackerData = [
  { image: mealsIcon, title: "Meals Rescued Today", value: "3,010" },
  { image: volunteersIcon, title: "Active Volunteers", value: "2,010" },
  { image: foodSavedIcon, title: "Food Saved from Waste(kg)", value: "1,100" },
  { image: rewardsIcon, title: "Number of Donors", value: "500" },
  { image: rewardsIcon, title: "NGOs affiliated", value: "75" },
  { image: rewardsIcon, title: "Rewards Redeemed", value: "2,000" },
  { image: rewardsIcon, title: "Rewards Redeemed", value: "2,000" },
  { image: rewardsIcon, title: "Rewards Redeemed", value: "2,000" },
  { image: rewardsIcon, title: "Rewards Redeemed", value: "2,000" },
];

export default function ImpactTracker() {
  return (
    <div className="tracker-container">
      <h2 className="tracker-title">Our Impact</h2>
      <div className="tracker-grid">
        {trackerData.map((item, index) => (
          <div key={index} className="tracker-card">
            <img src={item.image} alt={item.title} className="tracker-image" />
            <p className="tracker-value">{item.value}</p>
            <p className="tracker-label">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
