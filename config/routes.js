const express = require('express');
const router = express.Router();

// Include other required files
// TODO: test with secureRoute
const secureRoute = require('../lib/secureRoute');

// Include necessary controllers
const tripController = require('../controllers/tripController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const activityController = require('../controllers/activityController');
const tripActivityController = require('../controllers/tripActivityController');

// Routes go here
router.route('/trips')
  // .all(secureRoute)
  .get(tripController.index)
  .post(tripController.create);

router.route('/trips/:id')
  // .all(secureRoute)
  .get(tripController.show)
  .put(tripController.update)
  .delete(tripController.delete);

router.route('/users')
  // .all(secureRoute)
  .get(userController.index);

router.route('/users/:id')
  // .all(secureRoute)
  .get(userController.show)
  .put(userController.update)
  .delete(userController.delete);

router.route('/activities')
  // .all(secureRoute)
  .get(activityController.index)
  .post(activityController.create);

router.route('/activities/:id')
  // .all(secureRoute)
  .get(activityController.show)
  // .put(activityController.update)
  .delete(activityController.delete);


router.route('/trips/:tripId/activities')
  .post(tripActivityController.create);

router.route('/trips/:tripId/activities/:activityId')
  .delete(tripActivityController.delete);

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

module.exports = router;
