const Tourist = require("../models/Tourist");

// Get all tourist
exports.getAllTourist = async (req, res) => {
	try {
		const tourist = await Tourist.find();
		res.json(tourist);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// Get a specific tourist by ID
exports.getTouristById = async (req, res) => {
	try {
		const tourist = await Tourist.findById(req.params.id);
		if (!tourist) {
			return res.status(404).json({ error: "Tourist not found" });
		}
		res.json(tourist);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// Create a new tourist
exports.createTourist = async (req, res) => {
	try {
		const tourist = new Tourist(req.body);
		await tourist.save();
		res.status(201).json(tourist);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};
