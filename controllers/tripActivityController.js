const Trip = require('../models/trip');

// We want to create an activity
function activitiesCreate(req, res) {
  console.log('we are in activities create...');
  Trip
    .findById(req.params.tripId) // find a trip id (ex. Paris)
    .then(trip => {
      trip.activities.activity.push(req.body); // push the activities (req.body) into the trip's activities array
      return trip.save(); // save the trip
    })
    .then(trip => res.redirect(`/trips/${trip.id}/activities`)) // go back to the trip TODO: redirect to the same page.
    .catch(err => console.log(err));
}

function activitiesDelete(req, res, next) {
  console.log('we are in activities delete...');
  Trip
    .findById(req.params.tripId)
    .then(trip => {
      const activityIdToDelete = req.params.activityId;
      // TODO: make sure only the user that is logged in can delete the activity from their trip
      //gets activity id from the routes file and attaches it to the req
      trip.activities = trip.activities.filter(activity => activity.id !== activityIdToDelete
      );
      return trip.save();
    })
    .then(trip => res.redirect(`/trips/${trip.id}`))
    .catch(next);
}

module.exports = {
  create: activitiesCreate,
  delete: activitiesDelete
};
