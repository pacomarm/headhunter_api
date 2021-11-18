const { Schema, model } = require('mongoose');

const SpeedDateSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  modality: { type: String, required: true },
  hunter_email: { type: String, required: true },
  talent_email: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = model('SpeedDate', SpeedDateSchema);
