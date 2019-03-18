const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylistSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    image: { type: String, required: true}
});

const Stylist = mongoose.model("Stylist", stylistSchema);

module.exports = Stylist;
