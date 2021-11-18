const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  payment: { type: Number, default: 0 },
  status: { type: String, default: 'Inactive', required: true },
});

module.exports = model('Project', ProjectSchema);
