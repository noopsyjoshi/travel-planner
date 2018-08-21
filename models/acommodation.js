const mongoose = require('mongoose');
// model will need to be adjusted once we will plug in to APIs,  (seed parameter names were changed)
const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: false },
  imageUrl: { type: String, required: false },
  yelpUrl: { type: String, required: false },
  categories: [{ type: String, required: false}],
  isClosed: { type: Boolean, required: false },
  price: { type: String, required: false },
  rating: { type: Number, required: false },
  coordinates: {
    latitude: { type: String, required: false },
    longitude: { type: String, required: false }
  }
});

module.exports = mongoose.model('Accommodation', accommodationSchema);
