const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  tripId: { type: Number, required: true },
  country: { type: String, required: true},
  city: { type: String, required: true },
  duration: { type: String, required: true },
  accomodation: [{ type: String, required: true }],
  budget: {type: Number, required: true },
  categories: [{ type: String, required: true}]
});

module.exports = mongoose.model('Trip', tripSchema);
