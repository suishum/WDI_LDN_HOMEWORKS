const mongoose = require('mongoose');

const dogSchema = new mongoose.Schema({
  name: { type: String, minlength: 2 },
  image: { type: String },
  breed: { type: String, minlength: 2 },
  description: { type: String, minlength: 2, maxlength: 360 },
  eyebrowLength: { type: Number }
});

module.exports = mongoose.model('Dog', dogSchema);
