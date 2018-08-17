const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  yelpUrl: { type: String, required: true },
  categories: [{ type: String, required: true}],
  isClosed: { type: Boolean, required: true },
  price: { type: String, required: true },
  rating: { type: Number, required: true },
  coordinates: {
    latitude: { type: String, required: true },
    longitude: { type: String, required: true }
  }
});

module.exports = mongoose.model('Activity', activitySchema);
