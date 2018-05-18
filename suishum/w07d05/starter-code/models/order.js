const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  order: {
    beverage: { type: mongoose.Schema.ObjectId, ref: 'Item'},
    extra1: { type: mongoose.Schema.ObjectId, ref: 'Item'},
    extra2: { type: mongoose.Schema.ObjectId, ref: 'Item'}
  },
  orderTotal: { type: Number, required: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Order', orderSchema);
