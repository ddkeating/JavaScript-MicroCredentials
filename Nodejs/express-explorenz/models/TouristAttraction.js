const mongoose = require("mongoose");

const touristAttractionSchema = new mongoose.Schema({
	attraction_id: { type: String, required: true, unique: true },

	name: { type: String, required: true },

	description: { type: String, required: true },

	category_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Category",
		required: true,
	},

	image: { type: String },
});

const TouristAttraction = mongoose.model(
	"TouristAttraction",
	touristAttractionSchema
);

module.exports = TouristAttraction;
