/* global api, expect, describe, it, beforeEach */
const Model = require('../../models/activity');
const User = require('../../models/user');

const jwt = require('jsonwebtoken');
const { secret } = require('../../config/environment');

let token;

let activityId;

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

describe('DELETE /activitys/:id', () => {
  beforeEach(done => {
    User.remove({})
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user.id }, secret, { expiresIn: '1hr' });
        return Model.remove({});
      })
      .then(() => Model.create(activityData))
      .then(activity => {
        activityId = activity.id;
        done();
      });
  });

  it('should return a 401 without a token', done => {
    api.delete(`/api/activitys/${activityId}`)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

  it('should return a 204 with a token', done => {
    api.delete(`/api/activitys/${activityId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .end((err, res) => {
        expect(res.status).to.eq(204);
        done();
      });
  });

  it('should delete the activity', done => {
    api.delete(`/api/activitys/${activityId}`)
      .set('Authorization', `Bearer ${token}`) // Create an authorization header
      .then(() => Model.find())
      .then(activitys => {
        expect(activitys.length).to.eq(0);
        done();
      });
  });

});
