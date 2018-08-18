const User = require('../models/user');

function usersIndex(req, res, next) {
  User
    .find()
    .then(users => res.json(users))
    .catch(next);
}

function usersShow(req, res, next) {
  User
    .findbyId(req.params.id)
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

function userNew(req, res, next) { // this is sign up page
  User
    .findById(req.params.id)
    .then(user => user.create(req.body))
    .then(user => user.save())
    .then(user => user.json(user))
    .catch(next);
}

function userDelete(req, res, next) {
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
  new: userNew,
  delete: userDelete
};
