const { Schema, model } = require('mongoose');

const TalentSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  /*email: { type: String, required: true },
  password: { type: String, required: true },
  state: { type: String, required: true },
  reputation: { type: Number, default: 0 },
  profession: { type: String, required: true },
  skills: { type: String, required: true }, */
});

module.exports = model('Talent', TalentSchema);
