const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  tripId: { type: Number, required: false  },
  country: { type: String, required: false },
  city: { type: String, required: true },
  duration: { type: String, required: false  },
  accomodation: [{ type: String, required: false  }],
  budget: {type: Number, required: false  },
  categories: [{ type: String, required: false }]
});

module.exports = mongoose.model('Trip', tripSchema);
