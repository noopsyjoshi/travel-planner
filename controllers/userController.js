const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .populate('trips')
    .then(users => res.json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findById(req.params.id)
    .populate('trips')
    .then(user => res.json(user))
    .catch(next);
}

function usersUpdate(req, res, next) { // update takes info from edit form and pushes into the database
  User
    .findById(req.params.id)
    .then(user => user.set(req.body))
    .then(user => user.save())
    .then(user => res.json(user))
    .catch(next);
}

function usersNew(req, res, next) { // this is sign up page
  User
    .findById(req.params.id)
    .then(user => user.create(req.body))
    .then(user => user.save())
    .then(user => user.json(user))
    .catch(next);
}

function usersDelete(req, res, next) {
  User
    .findById(req.params.id)
    .then(user => user.remove())
    .then(() => res.sendStatus(204)) // No content was found
    .catch(next);
}

module.exports = {
  index: usersIndex,
  show: usersShow,
  update: usersUpdate,
  new: usersNew,
  delete: usersDelete
};
