const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
	rating_id: { type: String, required: true, unique: true },

	tourist_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "Tourist",
		required: true,
	},

	attraction_id: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "TouristAttraction",
		required: true,
	},

	rating: { type: Number, required: true },

	comment: { type: String },

	date: { type: Date, default: Date.now },
});

const Rating = mongoose.model("Rating", ratingSchema);

module.exports = Rating;
