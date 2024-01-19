const express = require("express");
const router = express.Router();
const touristController = require("../controllers/touristapiControllers");

// Get all tourists
router.get("/", touristController.getAllTourists);

// Get a specific tourist by ID
router.get("/:id", touristController.getTouristById);

// Create a new tourist
router.post("/", touristController.createTourist);

module.exports = router;
