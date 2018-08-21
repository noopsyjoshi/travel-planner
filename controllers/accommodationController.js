const Accommodation = require('../models/accommodation');

function accommodationsIndex(req, res, next) {
  Accommodation
    .find()
    .then(accommodations => res.json(accommodations))
    .catch(next);
}

function accommodationsShow(req, res, next) {
  Accommodation
    .findById(req.params.id)
    .then(accommodation => res.json(accommodation))
    .catch(next);
}

function accommodationsCreate(req, res, next) {
  Accommodation
    .create(req.body)
    .then(accommodation => res.status(201).json(accommodation))
    .catch(next);
}

function accommodationsDelete(req, res, next) {
  Accommodation
    .findById(req.params.id)
    .then(accommodation => accommodation.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: accommodationsIndex,
  show: accommodationsShow,
  create: accommodationsCreate,
  delete: accommodationsDelete
};
