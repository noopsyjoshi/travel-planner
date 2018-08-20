/* global api, expect, describe, it, beforeEach */
const User = require('../../models/user');

const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

let token;

let userId;

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

describe('DELETE /activitys/:id', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user.id }, secret, { expiresIn: '1hr' });
        return Model.remove({});
        done();
      });
  });

  it('should delete the user', done => {
    api.delete(`/api/user/${userId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .then(() => Model.find())
      .then(users => {
        expect(users.length).to.eq(0);
        done();
      });
  });

});
