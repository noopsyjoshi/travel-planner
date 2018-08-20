/* global api, expect, describe, it, beforeEach */

const Trip = require('../../models/trip');
const Activity = require('../../models/activity');
const User = require('../../models/user');

const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

let token; // token is global

let tripId;
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
const tripData = {
  tripId: '123',
  country: 'United Kingdom',
  city: 'London',
  duration: 3,
  accomodation: 'Hotel',
  budget: 500,
  categories: ['music', 'historicalSites', 'food']
};
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
  },
  {
    name: 'Deutsches Historisches Museum',
    imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/ScDFgBFg97yjxKgJYpc8Vg/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/deutsches-historisches-museum-berlin-3?adjust_creative=-_r9Vex0FMEA8eIp9IFbLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-_r9Vex0FMEA8eIp9IFbLA',
    categories: ['museums', 'historicalBuildings'],
    isClosed: false,
    price: '€',
    rating: 4.5,
    coordinates: {
      latitude: 52.5180636298599,
      longitude: 13.3969541018524
    }
  }
];

describe('DELETE /trips/:id/activity/:id', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user.id }, secret, { expiresIn: '1hr' });
        return Trip.Activity.remove({});
      })
      const activityIdToDelete = req.params.activitiyId
      .then(() => activityIdToDelete.create(activityData))
      .then(trip => {
        activityIdToDelete = trip.id;
        done();
      });
  });

  it('should delete the activity from the trip', done => {
    api.delete(`/api/trips/:id/activity/${activityId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .then(() => Trips.find())
      .then(activityIdToDelete => {
        expect(trips.length).to.eq(0);
        done();
      });
  });

});
