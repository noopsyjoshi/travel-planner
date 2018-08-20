/* global api, expect, describe, it, beforeEach */
const Activity = require('../../models/activity');
const User = require('../../models/user');

// auth
const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

let token; // token is global

let activityId;

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

const activityData = {
  country: 'United Kingdom',
  city: 'London',
  duration: 3,
  accomodation: 'Hotel',
  budget: 500,
  categories: ['music', 'historicalSites', 'food']
};

const updateActivityData = {
  country: 'USA',
  city: 'Los Angeles',
  duration: 12,
  accomodation: 'Hotel',
  budget: 1000000,
  categories: ['music', 'historicalSites', 'food']
};

describe('PUT /activitys/:id', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user.id }, secret, { expiresIn: '1hr' });
        return Activity.remove({});
      })
      .then(() => Activity.create(activityData))
      .then(activity => {
        activityId = activity.id;
        done();
      });
  });

  it('should return a 401 without a token', done => {
    api.put(`/api/activitys/${activityId}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 200 with a token', done => {
    api.put(`/api/activitys/${activityId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .send(updateActivityData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an object', done => {
    api.put(`/api/activitys/${activityId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .send(updateActivityData)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the updated data', done => {
    api.put(`/api/activitys/${activityId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .send(updateActivityData)
      .end((err, res) => {
        expect(res.body.name).to.eq(updateActivityData.name);
        expect(res.body.country).to.eq(updateActivityData.country);
        done();
      });
  });

});
