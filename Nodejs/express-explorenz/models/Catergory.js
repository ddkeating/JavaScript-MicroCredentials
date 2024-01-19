const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
	category_id: { type: String, required: true, unique: true },

	name: { type: String, required: true },

	description: { type: String },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
