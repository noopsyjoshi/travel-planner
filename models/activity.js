const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  name: { type: String, required: true },
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

module.exports = mongoose.model('Activity', activitySchema);


//NOTES
// requet add acticity
// in the body add the idea of the activity: ""
// add an activity to the trip
// activities is an array of activities

// trip needs to have a start date
// backend stuff that adds an activity to the trip

// post to /trips/id/acti
