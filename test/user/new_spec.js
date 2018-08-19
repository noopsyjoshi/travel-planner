/* global describe, it, expect, api, beforeEach */

const User = require('../../models/user');

const userData = {
  firstName: 'test',
  lastName: 'user',
  username: 'testuser',
  email: 'test@test.com',
  password: 'pass'
};


describe('POST /register', () => {
  beforeEach(done => {
    User.remove({});
    done();
  });

  // Creating a new user
  it('should return a 200', done => {
    api.post('/api/register')
      .send(userData)
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });
});
