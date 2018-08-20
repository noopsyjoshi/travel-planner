/* global api, expect, describe, it, beforeEach */

const User = require('../../models/user'); // will need this model to connect to the db and retreive users

const userData = [
  {
    firstName: 'Kane',
    lastName: 'Lincoln',
    username: 'kanelincoln',
    email: 'kanelincoln@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    imageUrl: '',
    location: 'London',
    tripId: 123
  },
  {
    firstName: 'Noopur',
    lastName: 'Joshi',
    username: 'noopurjoshi',
    email: 'noopurjoshi@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    imageUrl: '',
    location: 'Berlin'
  },
  {
    firstName: 'Laura',
    lastName: 'Auksoriute',
    username: 'lauraauksoriute',
    email: 'lauraauksoriute@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    imageUrl: '',
    location: 'London'
  }
];

// this is mocha thing
describe('GET /users', () => { // Test the index route. Describe takes a function wihtout arguments
  // Mocha tets lifecycle hooks
  beforeEach(done => {
    // run this before every test in this  'describe' block
    User.remove({}) // remove all the users
      .then(() => User.create(userData)) // create new users (userData)
      .then(() => done());
  });

  // Mocha tests
  it('should return a 200 response', done => { // done is like 'next' in express
    api.get('/api/users') // api is our express app that runs through supertest
      .end((err, res) => { // when running this can have either two things, an error or response
      // now will use chai's expect
        expect(res.status).to.eq(200); // status ok
        done(); // tells mocha the test has finished
      });
  });

  it('should return an array', done => {
    api.get('/api/users')
      .end((err, res) => {
        expect(res.body).to.be.an('array'); // res.body should return an array of all users in userData (should return 3)
        done();
      });
  });

  it('should return an array of the correct length', done => {
    api.get('/api/users')
      .end((err, res) => {
        expect(res.body.length).to.eq(userData.length); // should return 3
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/users')
      .end((err, res) => {
        res.body.forEach(user => expect(user).to.be.an('object')); // should return an object with the user
        done();
      });
  });

  it('should return an array the correct data', done => {
    api.get('/api/users')
      .end((err, res) => {
        res.body.forEach(user => {
          // get the right user from the userData array
          const dataUser = userData.filter(w => w.name === user.name)[0]; // trying to get the right user out of data array, this is because the array is randomised
          expect(user.firstName).to.eq(dataUser.firstName);
          expect(user.email).to.eq(dataUser.emai);
          expect(user.location).to.eq(dataUser.location);
          done();
        });
      });
  });
});
