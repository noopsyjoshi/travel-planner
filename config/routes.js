const express = require('express');
const router = express.Router();
// Include necessary controllers
const tripController = require('../controllers/tripController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
// Include other required files
const secureRoute = require('../lib/secureRoute');

// Routes go here
router.route('/trips')
  .all(secureRoute)
  .get(tripController.show)
  .post(tripController.create);

router.route('/trips/:id')
  .all(secureRoute)
  .get(tripController.show);

router.route('/user')
  .all(secureRoute)
  .get(userController.show);

router.route('/register')
  .post(authController.register);

router.route('/login')
  .post(authController.login);

module.exports = router;
