const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const User = require('../models/user');
const Activity = require('../models/activity');

mongoose.connect(dbURI);

User.collection.drop();
Activity.collection.drop();

const userData = [
  {
    firstName: 'Kane',
    lastName: 'Lincoln',
    username: 'kanelincoln',
    email: 'kanelincoln@gmail.com',
    password: 'pass',
    confirmPassword: 'pass',
    imageUrl: '',
    location: 'London'
  },
  {
    firstName: 'Noopur',
    lastName: 'Joshi',
    username: 'noopurjoshi',
    email: 'noopurjoshi@gmail.com',
    password: 'pass',
    confirmPassword: 'pass',
    imageUrl: '',
    location: 'Berlin'
  },
  {
    firstName: 'Laura',
    lastName: 'Auksoriute',
    username: 'lauraauksoriute',
    email: 'lauraauksoriute@gmail.com',
    password: 'pass',
    confirmPassword: 'pass',
    imageUrl: '',
    location: 'London'
  }
];

User
  .create(userData)
  .then(users => {
    console.log(`Created ${users.length} users.`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
