const { Schema, model } = require('mongoose');

const ContractSchema = new Schema({
  title: { type: String, required: true },
  duration: { type: Number, required: true },
  payment: { type: Number, required: true },
  hunter_email: { type: String, required: true },
  talent_email: { type: String, required: true },
  confirmation: { type: Boolean, default: false, required: true },
});

module.exports = model('Contract', ContractSchema);
