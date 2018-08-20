/* global api, expect, describe, it, beforeEach */

// need to talk through the code
const User = require('../../models/user'); // will need this model because person needs to login
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

describe('POST /trips', () => { // posting to the index
  beforeEach(done => {
    User.remove({}) // drop and refresh the data after each test
      .then(() => User.create(userData)) // create a new user using model from line 5
      .then(user => {
        token = jwt.sign({ sub: user.id }, secret, { expiresIn: '3hr' }); // person needs to login back after 3hrs to get a new token
        done();
      });
  });

  it('should return a 401 without a token', done => {
    api.post('/api/trips') // make a new trip, post to api trips to this url
      .end((err, res) => { //
        expect(res.status).to.eq(401); // this is the response what you should be expecting to get
        done();
      });
  });

  it('should return a 201 with a token', done => {
    api.post('/api/trips')
      .set('Authorization', `Bearer ${token}`)
      .send(tripData)
      .end((err, res) => {
        expect(res.status).to.eq(201);
        done();
      });
  });

  it('should return an object', done => {
    api.post('/api/trips')
      .set('Authorization', `Bearer ${token}`)
      .send(tripData)
      .end((err, res) => {
        expect(res.body).to.be.an('object');
        done();
      });
  });

  it('should return the correct data', done => {
    api.post('/api/trips')
      .set('Authorization', `Bearer ${token}`)
      .send(tripData)
      .end((err, res) => {
        expect(res.body.country).to.eq(tripData.country);
        expect(res.body.city).to.eq(tripData.city);
        done();
      });
  });

});
