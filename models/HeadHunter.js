const { Schema, model } = require('mongoose');

const TalentSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  /*password: { type: String, required: true },
  state: { type: String, required: true },
  country: { type: String, required: true },
  company: { type: String, required: true },
  projects: { type: String, required: true },
  reputation: { type: Number, default: 0 }, */
});

module.exports = model('HeadHunter', TalentSchema);
