const mongoose = require('mongoose');

const bangerSchema = new mongoose.Schema({
  name: { type: String },
  artist: { type: String },
  releaseDate: { type: String },
  genre: { type: String },
  album: { type: String }
});


module.exports = mongoose.model('Banger', bangerSchema);
