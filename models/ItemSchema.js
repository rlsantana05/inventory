const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema({
  modelNumber: String,
  description: String,
  PlaqueCapacity: Number,
  length: Number,
  width: Number,
  height: Number,
  qty: Number,
  unitePrice: Number,
});

module.exports = mongoose.model('Items', itemSchema);




