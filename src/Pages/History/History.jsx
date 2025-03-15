import React, { useState } from "react";
import "./History.css";
import { useNavigate } from "react-router-dom"

const DonationHistory = () => {
  const [filter, setFilter] = useState("ALL");
  const [sortBy, setSortBy] = useState(null);

  const donations = [
    { name: "Helping Hands", weight: 20, date: "12 March", type: "VEG"},
    { name: "JohnDoe92", weight: 15, date: "9 March", type: "NON-VEG" },
    { name: "EmilyCares", weight: 21, date: "5 March", type: "VEG" },
    { name: "Food For All", weight: 20, date: "1 March", type: "NON-VEG" },
    { name: "Goodwill Trust", weight: 25, date: "25 February", type: "VEG" },
    { name: "SarahGiver", weight: 5, date: "19 February", type: "NON-VEG" },
    { name: "Hope Foundation", weight: 10, date: "12 February", type: "VEG" },
    { name: "MarkTheHelper", weight: 8, date: "5 February", type: "NON-VEG" },
    { name: "Care & Share", weight: 12, date: "28 January", type: "VEG" },
    { name: "DavidCharity", weight: 18, date: "20 January", type: "NON-VEG" },
    { name: "Feed The Needy", weight: 22, date: "15 January", type: "VEG" },
    { name: "AnnaKindness", weight: 14, date: "10 January", type: "NON-VEG" }
  ];

  // Filter function
  const filteredDonations = donations.filter((donation) => 
    filter === "ALL" || donation.type === filter
  );

  // Sorting function
  const sortedDonations = [...filteredDonations].sort((a, b) => {
    if (sortBy === "QUANTITY") return b.weight - a.weight;
    return 0;
  });

  const navigate = useNavigate();

  return (
    <div className="donation-history">
      <h3>Donation History</h3>

      {/* Filter Buttons */}
      <div className="filter-buttons">
        <button className={`filter-btn ${filter === "ALL" ? "active" : ""}`} onClick={() => setFilter("ALL")}>
          ALL
        </button>
        <button className={`filter-btn ${filter === "VEG" ? "active" : ""}`} onClick={() => setFilter("VEG")}>
          VEG
        </button>
        <button className={`filter-btn ${filter === "NON-VEG" ? "active" : ""}`} onClick={() => setFilter("NON-VEG")}>
          NON-VEG
        </button>
        <button className="sort-btn" onClick={() => setSortBy(sortBy === "QUANTITY" ? null : "QUANTITY")}>
          Sort by Quantity {sortBy === "QUANTITY" ? "⬆️" : "⬇️"}
        </button>
      </div>

      {/* Donation List */}
      <div className="history-list">
        {sortedDonations.map((entry, index) => (
          <div key={index} className="history-item">
            <span>{entry.name}</span>
            <span>{entry.weight} KG</span>
            <span>{entry.date}</span>
            <span className={`donation-type ${entry.type === "VEG" ? "veg" : "non-veg"}`} style={{color : "white"}}>
              {entry.type}
            </span>
          </div>
        ))}
      </div>
      <button className="back-btn" style={{backgroundColor: "green", marginTop: "20px", padding: "20px", borderRadius: "8px", fontSize: "20px", color : "white"}} onClick={() => navigate("/donors")}>
        Back to Main Page
      </button>
    </div>
  );
};

export default DonationHistory;
