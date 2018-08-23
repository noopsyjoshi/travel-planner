const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  country: { type: String, required: false },
  city: { type: String, required: true },
  duration: { type: String, required: false  },
  accommodationTypes: [{ type: String, required: false  }], // this is accommodation top level categories e.g. Hostel, Hotel, B&B etc.
  accommodations: [
    {
      accommodation: { type: mongoose.Schema.ObjectId, ref: 'Accommodation'},
      dayNumber: { type: Number }
    }
  ],
  budget: {type: Number, required: false  },
  categories: [{ type: String, required: false }], // this is activity top level categories e.g. Music, Events, Food
  activities: [
    {
      activity: { type: mongoose.Schema.ObjectId, ref: 'Activity' },
      dayNumber: { type: Number }
    }
  ]
});

module.exports = mongoose.model('Trip', tripSchema);
