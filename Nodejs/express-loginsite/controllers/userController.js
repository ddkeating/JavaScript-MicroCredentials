const userModel = require("../models/Users");

// GET /users - Retrieves all users.
const getAllUsers = async (req, res) => {
	try {
		const user = await userModel.find();
		res.json(user);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

// POST /users - Creates a new user.
const createUser = async (req, res) => {
	try {
		const user = new userModel(req.body);
		await user.save();
		res.status(201).json(user);
	} catch (error) {
		res.status(500).json({ error: "Internal server error" });
	}
};

module.exports = {
	getAllUsers,

	createUser,
};
