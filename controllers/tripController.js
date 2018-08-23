const Trip = require('../models/trip');
const User = require('../models/user');

function tripsIndex(req, res, next) {
  Trip
    .find()
    .populate('accommodations.accommodation accommodations activities activities.activity')
    .then(trips => res.json(trips))
    .catch(next);
}

// trips show is the end result page, where the user can see the itenarary of their trip
function tripsShow(req, res, next) {
  Trip
    .findById(req.params.id)
    .populate('accommodations.accommodation accommodations activities.activity')
    .then(trip => res.json(trip))
    .catch(next);
}

// user can create a new trip
function tripsCreate(req, res, next) {
  console.log('req.body =>', req.body);
  console.log('req.user =>', req.user);
  Trip
    .create(req.body)
    .then(trip => {
      User
        .findById(req.user.id) // req.user gets assigned in secureRoute
        .then(user => {
          user.trips = [].concat(...user.trips, trip.id);
          console.log('this is me =>', user);
          return user.save();
        });
      console.log('this is trip after we have messed with the user', trip);
      return trip;
    })
    .then(trip => {
      console.log('this is trip in the next bit', trip);
      res.json(trip);
    })
    .catch(next);
}

// user can update their trip from their dashboard
function tripsUpdate(req, res, next) {
  Trip
    .findById(req.params.id)
    .then(trip => trip.set(req.body))
    .then(trip => trip.save())
    .then(trip => res.json(trip))
    .catch(next);
}

// user can delete their recent trip from their dashboard
function tripsDelete(req, res, next) {
  Trip
    .findById(req.params.id)
    .then(trip => trip.remove())
    .then(() => res.sendStatus(204)) // NO CONTENT
    .catch(next);
}

module.exports = {
  index: tripsIndex,
  show: tripsShow,
  create: tripsCreate,
  update: tripsUpdate,
  delete: tripsDelete
};
