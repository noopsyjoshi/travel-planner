const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  country: { type: String, required: false },
  city: { type: String, required: true },
  duration: { type: String, required: false  },
  accomodationType: [{ type: String, required: false  }],
  accommodation: [{ type: String, required: false  }],
  budget: {type: Number, required: false  },
  categories: [{ type: String, required: false }],
  activities: [
    {
      activity: { type: mongoose.Schema.ObjectId, ref: 'Activity' },
      date: { type: Date }
    }
  ]
});

module.exports = mongoose.model('Trip', tripSchema);


// removed tripid
// change coords to number not string
