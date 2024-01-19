const TouristAttraction = require("../models/TouristAttraction");

// GET /tourist-attractions - Retrieve all tourist attractions.
const getAllTouristAttractions = async (req, res) => {
	try {
		const touristAttractions = await TouristAttraction.find().populate(
			"category"
		);

		res.render("touristAttraction/index", { touristAttractions });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// GET /tourist-attractions/:id - Retrieve a specific tourist attraction

const getTouristAttractionById = async (req, res) => {
	try {
		const attraction = await TouristAttraction.findById(req.params.id).populate(
			"category"
		);

		if (!attraction) {
			return res.status(404).json({ error: "Tourist attraction not found" });
		}

		res.render("touristAttraction/show", { attraction });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// POST /tourist-attractions - Create a new tourist attraction.
const createTouristAttraction = async (req, res) => {
	try {
		const touristAttraction = new TouristAttraction(req.body);
		await touristAttraction.save();
		res.status(201).json(touristAttraction);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	getAllTouristAttractions,

	getTouristAttractionById,

	createTouristAttraction,
};
