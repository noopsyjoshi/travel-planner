/* global api, expect, describe, it, beforeEach */
const Trip = require('../../models/trip');
const User = require('../../models/user');

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
  tripId: '123',
  country: 'United Kingdom',
  city: 'London',
  duration: 3,
  accomodation: 'Hotel',
  budget: 500,
  categories: ['music', 'historicalSites', 'food']
};

describe('DELETE /trips/:id', () => {
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
    api.delete(`/api/trips/${tripId}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 204 with a token', done => {
    api.delete(`/api/trips/${tripId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .end((err, res) => {
        expect(res.status).to.eq(204);
        done();
      });
  });

  it('should delete the trip', done => {
    api.delete(`/api/trips/${tripId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .then(() => Trip.find())
      .then(trips => {
        expect(trips.length).to.eq(0);
        done();
      });
  });
});
