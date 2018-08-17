const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

const User = require('../models/user');
const Activity = require('../models/activity');

mongoose.connect(dbURI);

User.collection.drop();
Activity.collection.drop();

const userData = [
  {
    firstName: 'Kane',
    lastName: 'Lincoln',
    username: 'kanelincoln',
    email: 'kanelincoln@gmail.com',
    password: 'pass',
    confirmPassword: 'pass',
    imageUrl: '',
    location: 'London'
  },
  {
    firstName: 'Noopur',
    lastName: 'Joshi',
    username: 'noopurjoshi',
    email: 'noopurjoshi@gmail.com',
    password: 'pass',
    confirmPassword: 'pass',
    imageUrl: '',
    location: 'Berlin'
  },
  {
    firstName: 'Laura',
    lastName: 'Auksoriute',
    username: 'lauraauksoriute',
    email: 'lauraauksoriute@gmail.com',
    password: 'pass',
    confirmPassword: 'pass',
    imageUrl: '',
    location: 'London'
  }
];

const activityData = [
  // Museum and Landmarks & historicalBuildings
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
  },
  {
    name: 'Topography of Terror',
    imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/cBEA_vJGv534Jl7K_QbXyQ/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/stiftung-topographie-des-terrors-berlin-3?adjust_creative=-_r9Vex0FMEA8eIp9IFbLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-_r9Vex0FMEA8eIp9IFbLA',
    categories: ['music'],
    isClosed: false,
    price: '€',
    rating: 4.5,
    coordinates: {
      latitude: 52.50599,
      longitude: 13.38281
    }
  },
  {
    name: 'Topography of Terror',
    imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/cBEA_vJGv534Jl7K_QbXyQ/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/stiftung-topographie-des-terrors-berlin-3?adjust_creative=-_r9Vex0FMEA8eIp9IFbLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-_r9Vex0FMEA8eIp9IFbLA',
    categories: ['museums', 'historicalBuildings'],
    isClosed: false,
    price: '€',
    rating: 4.5,
    coordinates: {
      latitude: 52.50599,
      longitude: 13.38281
    }
  },

  // music Venues

  {
    name: 'Berliner Philharmonie',
    imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/F5ygaRtWQ3-bWgV1yQqC8w/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/berliner-philharmonie-berlin?adjust_creative=-_r9Vex0FMEA8eIp9IFbLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-_r9Vex0FMEA8eIp9IFbLA',
    categories: ['music'],
    isClosed: false,
    price: '€€',
    rating: 5.0,
    coordinates: {
      latitude: 52.5097,
      longitude: 13.3695
    }
  },
  {
    name: 'Schokoladen',
    imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/KX1h84wHpRJmcLQSRMPFPw/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/schokoladen-berlin?adjust_creative=-_r9Vex0FMEA8eIp9IFbLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-_r9Vex0FMEA8eIp9IFbLA',
    categories: ['music'],
    isClosed: false,
    price: '€€',
    rating: 5.0,
    coordinates: {
      latitude: 52.5097,
      longitude: 13.3695
    }
  },
  {
    name: 'Rosis',
    imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/F5ygaRtWQ3-bWgV1yQqC8w/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/rosis-berlin-2?adjust_creative=-_r9Vex0FMEA8eIp9IFbLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=-_r9Vex0FMEA8eIp9IFbLA',
    categories: ['music'],
    isClosed: false,
    price: '€€',
    rating: 5.0,
    coordinates: {
      latitude: 52.50516,
      longitude: 13.3695
    }
  }];

User
  .create(userData)
  .then(users => {
    console.log(`Created ${users.length} users.`);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
