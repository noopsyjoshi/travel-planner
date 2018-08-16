const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
  image_url: { type: String, required: true },
  yelp_url: { type: String, required: true },
  categories: [{ type: String, required: true}],
  is_closed: { type: Boolean, required: true },
  price: { type: String, required: true },
  rating: { type: Number, required: true },
  coordinates: {
    latitude: { type: String, required: true },
    longitude: { type: String, required: true }
  }
});

module.exports = mongoose.model('Activity', activitySchema);
