const Activity = require('../models/activity');

function activitiesIndex(req, res, next) {
  Activity
    .find()
    .then(activities => res.json(activities))
    .catch(next);
}

function activitiesShow(req, res, next) {
  Activity
    .findById(req.params.id)
    .then(activity => res.json(activity))
    .catch(next);
}

function activitiesCreate(req, res, next) {
  Activity
    .create(req.body)
    .then(activity => res.status(201).json(activity))
    .catch(next);
}

function activitiesDelete(req, res, next) {
  Activity
    .findById(req.params.id)
    .then(activity => activity.remove())
    .then(() => res.sendStatus(204)) // NO CONTENT
    .catch(next);
}

module.exports = {
  index: activitiesIndex,
  show: activitiesShow,
  create: activitiesCreate,
  delete: activitiesDelete
};
