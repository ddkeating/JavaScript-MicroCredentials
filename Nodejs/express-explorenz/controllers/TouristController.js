const Tourist = require("../models/Tourist");

//GET /tourist - Retrieves all tourist.
const getAllTourist = async (req, res) => {
	try {
		const tourist = await Tourist.find().populate("name");
		res.render("tourist/touristIndex", { tourist });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// GET /tourist/:id - Retrieves a specific tourist.
const getTouristById = async (req, res) => {
	try {
		const touristId = await Tourist.findById(req.params.id).populate("name");

		if (!touristId) {
			return res.status(404).json({ error: "Tourist not found." });
		}

		res.render("tourist/touristShow", { touristId });
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// POST /tourist - Create a new tourist.
const createTourist = async (req, res) => {
	try {
		const tourist = new Tourist(req.body);
		await tourist.save();
		res.status(201).json(tourist);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	getAllTourist,

	getTouristById,

	createTourist,
};
