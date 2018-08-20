/* global api, expect, describe, it, beforeEach */

const Trip = require('../../models/trip');
const tripData = [
  {
    tripId: '123',
    country: 'United Kingdom',
    city: 'London',
    duration: 3,
    accomodation: 'Hotel',
    budget: 500,
    categories: ['music', 'historicalSites', 'food']
  }
];

// this is mocha thing
describe('GET /trips', () => { // Test the index route. Describe takes a function wihtout arguments
  // Mocha tets lifecycle hooks
  beforeEach(done => {
    // run this before eveyrtest in this  'describe' block
    Trip.remove({}) // remove all the trips. this is mongo things
      .then(() => Trip.create(tripData))
      .then(() => done());
  });

  // Mocha tests
  it('should return a 200 response', done => { // done is like 'next' in express. call this when
    api.get('/api/trips') // api is our express app that runs through supertest
      .end((err, res) => { // when running this can have either two things
      // now will use chais expect
        expect(res.status).to.eq(200);
        done(); // tells mocha the test has finished
      });
  });

  it('should return an array', done => {
    api.get('/api/trips')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });

  it('should return an array of the correct length', done => {
    api.get('/api/trips')
      .end((err, res) => {
        expect(res.body.length).to.eq(tripData.length);
        done();
      });
  });


  it('should return an array of objects', done => {
    api.get('/api/trips')
      .end((err, res) => {
        res.body.forEach(trip => expect(trip).to.be.an('object'));
        done();
      });
  });

  it('should return an array the correct data', done => {
    api.get('/api/trips')
      .end((err, res) => {
        res.body.forEach(trip => {
          // get the right trip from the tripData array
          const dataTrip = tripData.filter(w => w.name === trip.name)[0]; // trying to get the right trip out of data array
          expect(trip.country).to.eq(dataTrip.country);
          expect(trip.city).to.eq(dataTrip.city);
          expect(trip.budget).to.eq(dataTrip.budget);
          done();
        });
      });
  });

});
