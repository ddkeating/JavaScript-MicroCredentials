const express = require("express");
const router = express.Router();

// Import tourist controller/
const touristController = require("../controllers/TouristController");

// GET /tourist - Retrieve all tourist.
router.get("/", touristController.getAllTourist);

// GET /tourist/:id - Retrieve a specific tourist.
router.get("/:id", touristController.getTouristById);

// POST /tourist - Create a new tourist.
router.post("/", touristController.createTourist);

module.exports = router;
