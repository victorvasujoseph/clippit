const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylistSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    stylistId: Schema.Types.ObjectId
});

const Stylist = mongoose.model("Stylist", stylistSchema);

module.exports = Stylist;
