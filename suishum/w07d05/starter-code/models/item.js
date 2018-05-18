const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  item: { type: String, required: true },
  price: { type: String, required: true },
  beverage: { type: Boolean, required: true },
  constraints: { type: String, required: true, enum: ['none', 'tea-only', 'coffee-only', 'tea-or-coffee'] }
  // extras: [ { type: String, required: true } ]
});

module.exports = mongoose.model('Item', itemSchema);
