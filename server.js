require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/FoodFlow", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

// Define Schema
const donationSchema = new mongoose.Schema({
  foodType: String,
  minServings: Number,
  foodCategory: String,
  numServings: Number,
  numDishes: Number
});

const Donation = mongoose.model("Donation", donationSchema);

// Create API route
app.post("/api/donations", async (req, res) => {
  try {
    const donation = new Donation(req.body);
    await donation.save();
    res.status(201).json({ message: "Donation saved successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
