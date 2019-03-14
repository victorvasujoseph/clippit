const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  stylistID: { type: Schema.Types.ObjectId, required: true },
  day: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  timeSlot: { type: String, required: true },
  customerID: { type: Schema.Types.ObjectId, required: true },
  state: { type: String, default: "active" }
});

const Appointments = mongoose.model("Appointments", appointmentSchema);

module.exports = Appointments;
