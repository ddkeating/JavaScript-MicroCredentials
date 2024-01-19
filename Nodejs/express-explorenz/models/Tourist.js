const mongoose = require("mongoose");

const touristSchema = new mongoose.Schema({
	tourist_id: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	email: { type: String, required: true },
	// Other relevant details to be added.
});

const Tourist = mongoose.model("Tourist", touristSchema);

module.exports = Tourist;
