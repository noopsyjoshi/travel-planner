/* global api, expect, describe, it, beforeEach */

const Activity = require('../../models/activity'); // will need this model to connect to the db and retreive activities
const User = require('../../models/user'); // will need this model to connect to the db and retreive activities

const activityData = [
  // BERLIN
  // museum & historicalBuildings
  {
    name: 'New Museum',
    imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/wx8kQbt9-GIDxgq7JEwwrA/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/neues-museum-berlin?adjust_creative=-_r9Vex0FMEA8eIp9IFbLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-_r9Vex0FMEA8eIp9IFbLA',
    categories: ['museums'],
    isClosed: false,
    price: '€',
    rating: 4.5,
    coordinates: {
      latitude: 52.520412703434,
      longitude: 13.3979630315196
    }
  },
  {
    name: 'Jewish Museum Berlin',
    imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/PURivWFaPp0HzkTCKBJQqw/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/j%C3%BCdisches-museum-berlin-berlin-3?adjust_creative=-_r9Vex0FMEA8eIp9IFbLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-_r9Vex0FMEA8eIp9IFbLA',
    categories: ['museums'],
    isClosed: false,
    price: '€',
    rating: 4.5,
    coordinates: {
      latitude: 52.5024964077649,
      longitude: 13.3948061103542
    }
  }
];
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
  }
];

// this is mocha thing
describe('GET /activities', () => { // Test the index route. Describe takes a function wihtout arguments
  // Mocha tets lifecycle hooks
  beforeEach(done => {
    // run this before every test in this  'describe' block
    Activity.remove({}) // remove all the activities
      .then(() => Activity.create(activityData)) // create new activities (in activityData)
      .then(() => done());
  });

  // Mocha tests
  it('should return a 200 response', done => { // done is like 'next' in express
    api.get('/api/activities') // api is our express app that runs through supertest
      .end((err, res) => { // when running this can have either two things, an error or response
      // now will use chai's expect
        expect(res.status).to.eq(200); // status ok
        done(); // tells mocha the test has finished
      });
  });

  it('should return an array', done => {
    api.get('/api/activities')
      .end((err, res) => {
        expect(res.body).to.be.an('array'); // res.body should return an array of all activities in activityData
        done();
      });
  });

  it('should return an array of the correct length', done => {
    api.get('/api/activities')
      .end((err, res) => {
        expect(res.body.length).to.eq(activityData.length); // should return 3
        done();
      });
  });

  it('should return an array of objects', done => {
    api.get('/api/activities')
      .end((err, res) => {
        res.body.forEach(activity => expect(activity).to.be.an('object')); // should return an object with the activity
        done();
      });
  });

  it('should return an array the correct data', done => {
    api.get('/api/activities')
      .end((err, res) => {
        res.body.forEach(activity => {
          // get the right activity from the activityData array
          const dataActivity = activityData.filter(w => w.name === activity.name)[0]; // trying to get the right activity out of data array, this is because the array is randomised
          expect(activity.name).to.eq(dataActivity.name);
          expect(activity.rating).to.eq(dataActivity.rating);
          expect(activity.isClosed).to.eq(dataActivity.isClosed);
          done();
        });
      });
  });
});
