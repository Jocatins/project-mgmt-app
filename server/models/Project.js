const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
	name: {
		type: String,
	},
	description: {
		type: String,
	},
	status: {
		type: String,
		enum: ["Not Started", "In Progress", "Completed"],
	},
	clientId: {
		type: mongoose.Schema.Types.ObjectId,
		// the generated id should be a reference to the Client model
		ref: "Client",
	},
});

module.exports = mongoose.model("Project", ProjectSchema);
