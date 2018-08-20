/* global api, expect, describe, it, beforeEach */
const Trip = require('../../models/trip');
const User = require('../../models/user');

// auth
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

let token; // token is global

let tripId;

const userData = {
  firstName: 'Kane',
  lastName: 'Lincoln',
  username: 'kanelincoln',
  email: 'kanelincoln@gmail.com',
  password: 'pass',
  passwordConfirmation: 'pass',
  imageUrl: '',
  location: 'London'
};

const tripData = {
  country: 'United Kingdom',
  city: 'London',
  duration: 3,
  accomodation: 'Hotel',
  budget: 500,
  categories: ['music', 'historicalSites', 'food']
};

const updateTripData = {
  country: 'Germany',
  city: 'Berlin',
  duration: 5,
  accomodation: 'Hostel',
  budget: 700,
  categories: ['music', 'historicalSites', 'food']
};

describe('PUT /trips/:id', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user.id }, secret, { expiresIn: '1hr' });
        return Trip.remove({});
      })
      .then(() => Trip.create(tripData))
      .then(trip => {
        tripId = trip.id;
        done();
      });
  });

  it('should return a 401 without a token', done => {
    api.put(`/api/trips/${tripId}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 200 with a token', done => {
    api.put(`/api/trips/${tripId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .send(updateTripData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.put(`/api/trips/${tripId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .send(updateTripData)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the updated data', done => {
    api.put(`/api/trips/${tripId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .send(updateTripData)
      .end((err, res) => {
        expect(res.body.country).to.eq(updateTripData.country);
        expect(res.body.city).to.eq(updateTripData.city);
        done();
      });
  });

});
