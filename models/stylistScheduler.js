const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const stylistSchedulerSchema = new Schema({
  stylistID: { type: Schema.Types.ObjectId, required: true },
  day: { type: Number, required: true },
  month: { type: Number, required: true },
  year: { type: Number, required: true },
  slot1: { type: Boolean, default: true },
  slot2: { type: Boolean, default: true },
  slot3: { type: Boolean, default: true },
  slot4: { type: Boolean, default: true },
  slot5: { type: Boolean, default: true },
  slot6: { type: Boolean, default: true },
  slot7: { type: Boolean, default: true },
  slot8: { type: Boolean, default: true }
});

const stylistSchedule = mongoose.model(
  "stylistSchedule",
  stylistSchedulerSchema
);

module.exports = stylistSchedule;
