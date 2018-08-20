/* global api, expect, describe, it, beforeEach */

// need to talk through the code
const User = require('../../models/user'); // will need this model because person needs to login
const Activity = require('../../models/activity'); // will need this model because person needs to login
const jwt = require('jsonwebtoken'); // token lasts for an hour (or whatever)
const { secret } = require('../../config/environment');

let token;

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

const activityData = [
  // BERLIN
  // museum & historicalBuildings
  {
    name: 'Pergamon Museum',
    imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/BrqqPNJ6nFJhgzU3DTChSg/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/pergamonmuseum-berlin?adjust_creative=-_r9Vex0FMEA8eIp9IFbLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-_r9Vex0FMEA8eIp9IFbLA',
    categories: ['museums'],
    isClosed: false,
    price: '€',
    rating: 4.5,
    coordinates: {
      latitude: 52.521183,
      longitude: 13.396902 // why are lat and long strings?
    }
  },
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

describe('POST /trips', () => { // posting to the index
  beforeEach(done => {
    User.remove({}) // drop and refresh the data after each test
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user.id }, secret, { expiresIn: '3hr' }); // person needs to login after 3hrs to get a new token
        done();
      });
  });

  it('should return a 401 without a token', done => {
    api.post('/api/activities') // make a new activity and post it to /api/activities
      .end((err, res) => { //
        expect(res.status).to.eq(401); // this is the response what you should be expecting to get when the user is not logged in
        done();
      });
  });

  it('should return a 201 with a token', done => {
    api.post('/api/activities')
      .set('Authorization', `Bearer ${token}`)
      .send(activityData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/activities')
      .set('Authorization', `Bearer ${token}`)
      .send(activityData)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/activities')
      .set('Authorization', `Bearer ${token}`)
      .send(activityData)
      .end((err, res) => {
        expect(res.body.country).to.eq(activityData.country);
        expect(res.body.city).to.eq(activityData.city);
        done();
      });
  });

});
