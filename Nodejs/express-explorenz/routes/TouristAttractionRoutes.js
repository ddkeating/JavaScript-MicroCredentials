const express = require("express");
const router = express.Router();

// Import tourist attraction controller.
const touristAttractionController = require("../controllers/TouristAttactionController");

// GET /tourist-attractions - Retrieve all tourist attractions.
router.get("/", touristAttractionController.getAllTouristAttractions);

// GET /tourist-attractions/:id - Retrieve a specific tourist attraction.
router.get("/:id", touristAttractionController.getTouristAttractionById);

// POST /tourist-attractions - Create a new tourist attraction
router.post("/", touristAttractionController.createTouristAttraction);

module.exports = router;
