const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
  location: {
    lat: { type: Number },
    lng: { type: Number }
  },
  name: { type: String, required: true, minlength: 2 },
  price: { type: String, required: true, enum: ['£', '££', '£££'] },
  address: { type: String, required: true, unique: true },
  image: { type: String },
  rating: { type: Number, min: 1, max: 5 }
}, {
  timestamps: true
});

module.exports = mongoose.model('Place', placeSchema);
