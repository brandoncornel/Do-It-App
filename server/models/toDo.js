var mongoose = require("mongoose");

module.exports = mongoose.model("toDo", {
	name: {
		type: String,
		required: true
	},
	reminder: {
		type: String,
		required: true
	}
});