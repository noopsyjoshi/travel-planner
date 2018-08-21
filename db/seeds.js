const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');

// Required models
const User = require('../models/user');
const Activity = require('../models/activity');
const Trip = require('../models/trip');

// Set-up mongoose
mongoose.connect(dbURI);

// Remove pre-existing collections from MongoDB
User.collection.drop();
Activity.collection.drop();
Trip.collection.drop();

const userData = [
  {
    firstName: 'Kane',
    lastName: 'Lincoln',
    username: 'kanelincoln',
    email: 'kanelincoln@gmail.com',
    password: 'pass',
    passwordConfirmation: 'pass',
    imageUrl: '',
    location: 'London'
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
  },
  {
    name: 'Aint Nothin But A Blues bar',
    imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/vDYafb7CBIGWbFd2ohx08A/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/aint-nothin-but-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    isClosed: false,
    price: '££',
    reviewCount: 93,
    categories: ['Events', 'Jazz & Blues', 'Dance Clubs', 'Wine Bars'],
    rating: 4.0,
    coordinates: {
      latitude: 51.5129631039042,
      longitude: -0.139623144472486
    }
  },
  {
    name: 'The Troubadour',
    imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/Zor2WaKDJ67brS4PMxm77A/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/the-troubadour-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    isClosed: false,
    price: '££',
    reviewCount: 90,
    categories: ['Events', 'Music Venues', 'Cafes', 'Dance Clubs'],
    rating: 4.0,
    coordinates: {
      latitude: 51.488822437999,
      longitude: -0.19190476580433
    }
  },
  {
    name: 'Ronnie Scotts Jazz Club',
    imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/7ezCNh1dn5jeH1q_u09MIQ/o.jpg',
    yelpUrl: 'https://www.yelp.com/biz/ronnie-scotts-jazz-club-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    isClosed: false,
    price: '£££',
    reviewCount: 137,
    categories: ['Events', 'Jazz & Blues', 'Dance Clubs'],
    rating: 4.0,
    coordinates: {
      latitude: 51.5133855,
      longitude: -0.1315816
    }
  },
  {
    name: 'Nightjar',
    imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/yzyTg5QidNVxlEqH1BXOXg/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/nightjar-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    price: '£££',
    reviewCount: 167,
    categories: ['Events', 'Lounges', 'Cocktail Bars'],
    rating: 4.5,
    coordinates: {
      latitude: 51.5265350341797,
      longitude: -0.0877109989523888
    }
  },
  {
    name: 'Fabric',
    imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/4emoT1vXzePoCUmJJK65sw/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/fabric-london-2?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 188,
    categories: ['Events', 'Dance Clubs', 'Music Venues'],
    rating: 4.0,
    coordinates: {
      latitude: 51.5196084163624,
      longitude: -0.102471799978848
    },
    price: '£££'
  },
  {
    name: 'Spiritual Caipirinha Bar',
    imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/-qvx10r9d4r0sWU8CCAs4Q/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/spiritual-caipirinha-bar-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 13,
    categories: ['Events', 'Bars', 'Music Venues'],
    rating: 4.5,
    coordinates: {
      latitude: 51.543273,
      longitude: -0.14892
    },
    price: '££'
  },
  {
    name: 'The Social',
    imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/fiS1BPBL930Z2YwwKIiZAw/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/the-social-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 59,
    categories: ['Events', 'Bars', 'Dance Clubs', 'Music Venues'],
    rating: 4.0,
    coordinates: {
      latitude: 51.5174,
      longitude: -0.140846
    },
    price: '££'
  },
  {
    name: 'The Crobar',
    imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/6oJDu_9WJSz1zhrj6F8fNw/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/the-crobar-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 42,
    categories: ['Events', 'Music Venues', 'Dance Clubs', 'Pubs'],
    rating: 4.0,
    coordinates: {
      latitude: 51.514867642482,
      longitude: -0.13033772564174
    },
    price: '£'
  },
  {
    name: 'Jazz After Dark',
    imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/U3IgFL-weRLLTAKDx_F_2w/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/jazz-after-dark-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 19,
    categories: [ 'Events', 'Jazz & Blues'],
    rating: 4.0,
    coordinates: {
      latitude: 51.514502,
      longitude: -0.131048
    },
    price: '££'
  },
  {
    name: 'Wicked',
    imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/SzNhdz2Yd1tYmZ_E3UhKFg/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/wicked-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 113,
    categories: ['Events', 'Performing Arts'],
    rating: 4.5,
    coordinates: {
      latitude: 51.4954655032239,
      longitude: -0.142908096313477
    }
  },
  {
    name: 'Matilda',
    imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/d9uVysg3c_6mzeDQnonzCQ/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/matilda-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 27,
    categories: ['Events', 'Performing Arts'],
    rating: 4.5,
    coordinates: {
      latitude: 51.513650212979,
      longitude: -0.126782655715942
    }
  },
  {
    name: 'Hootananny',
    imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/6HnZHF-7feT3dtbbN6iwFw/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/hootananny-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 36,
    price: '££',
    categories: ['Events', 'Pubs', 'Music Venues'],
    rating: 4.0,
    coordinates: {
      latitude: 51.4553348340329,
      longitude: -0.113342337031209
    }
  },
  {
    name: 'Royal Academy Of Music',
    imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/gLqPTDdLy2AbnjlnBqYVvw/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/royal-academy-of-music-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 8,
    categories: ['Events', 'Education', 'Music Venues'],
    rating: 5.0,
    coordinates: {
      latitude: 51.523622,
      longitude: -0.152168
    }
  },
  {
    name: '606 Club',
    imageUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/3Cssf_xJItznixrne8JUDw/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/606-club-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 30,
    categories: [ 'Events', 'Jazz & Blues', 'Music Venues', 'American (New)'],
    rating: 4.5,
    coordinates: {
      latitude: 51.47813751937,
      longitude: -0.1819652922312
    },
    price: '££'
  },
  {
    name: 'Queen\'s Theatre',
    imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/Z_xRM_Gh9QO3Cq8KCGWYGg/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/queens-theatre-london-7?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 57,
    categories: ['Events', 'Performing Arts'],
    rating: 4.5,
    coordinates: {
      latitude: 51.511847,
      longitude: -0.132627779020711
    }
  },
  {
    name: 'The George Tavern',
    imageUrl: 'https://s3-media2.fl.yelpcdn.com/bphoto/84TMO00uBweJRGbEAzJxuQ/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/the-george-tavern-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 18,
    categories: ['Events', 'Dive Bars', 'Music Venues'],
    rating: 4.0,
    coordinates: {
      latitude: 51.514333,
      longitude: -0.053114
    },
    price: '£'
  },
  {
    name: 'The Amersham Arms',
    imageUrl: 'https://s3-media3.fl.yelpcdn.com/bphoto/1IF1IwMdLGu_tbJ60arlgQ/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/the-amersham-arms-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 30,
    categories: ['Events', 'Pubs', 'Dance Clubs', 'Music Venues'],
    rating: 4.0,
    coordinates: {
      latitude: 51.4757511346773,
      longitude: -0.0325703456536754
    },
    price: '££'
  },
  {
    name: 'Royal Albert Hall',
    imageUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/NCCK2AjtvsSdZr8is42RNQ/o.jpg',
    isClosed: false,
    yelpUrl: 'https://www.yelp.com/biz/royal-albert-hall-kensington?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    reviewCount: 207,
    categories: ['Events', 'Music Venues', 'Venues & Event Spaces'],
    rating: 4.5,
    coordinates: {
      latitude: 51.5009964375442,
      longitude: -0.177414610229825
    },
    price: '££'
  }
];

const accommodationData = [
  {
    'name': 'The Nadler Soho',
    'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/kjv2o3sE-s1fV07fHsanGw/o.jpg',
    'is_closed': false,
    'url': 'https://www.yelp.com/biz/the-nadler-soho-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    'review_count': 14,
    'categories': [
      {
        'alias': 'hotels',
        'title': 'Hotels'
      }
    ],
    'rating': 5.0,
    'coordinates': {
      'latitude': 51.5147387,
      'longitude': -0.1341108
    },
    'price': '£££'
  },
  {
    'name': 'Hotel Indigo',
    'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/HrTcSN0h7KyiK0NYDMPGLA/o.jpg',
    'is_closed': false,
    'url': 'https://www.yelp.com/biz/hotel-indigo-london-4?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    'review_count': 25,
    'categories': [
      {
        'alias': 'hotels',
        'title': 'Hotels'
      }
    ],
    'rating': 4.5,
    'coordinates': {
      'latitude': 51.4919293664835,
      'longitude': -0.191815613709144
    },
    'price': '££'
  },
  {
    'name': 'The Hoxton - Shoreditch',
    'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/qBswiDC9K9w9bi5yPGoW4Q/o.jpg',
    'is_closed': false,
    'url': 'https://www.yelp.com/biz/the-hoxton-shoreditch-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
    'review_count': 184,
    'categories': [
      {
        'alias': 'hotels',
        'title': 'Hotels'
      },
      {
        'alias': 'venues',
        'title': 'Venues & Event Spaces'
      }
    ],
    'rating': 4.5,
    'coordinates': {
      'latitude': 51.5255813407725,
      'longitude': -0.0828488618135452
    },
    'price': '££'
  }
];

const tripData = [
  {
    country: 'United Kingdom',
    city: 'London',
    duration: 3,
    accomodationType: ['Hotels', 'Hostels', 'Bed & Breakfast'], // is this needed?
    accommodation: [], // need accommodation id first
    budget: 500,
    categories: ['music', 'historicalSites', 'food'], // is this needed?
    activities: [] // need activity id first
  }
];



Activity
//create activity first
  .create(activityData)
  .then(activities => {
    console.log(`Created ${activities.length} activities...`);
    tripData[0].activities.push({
      date: new Date(2018,9,20),
      activity: activities[0]._id });
    tripData[0].activities.push({
      date: new Date(2018,9,21),
      activity: activities[1]._id });
    tripData[0].activities.push({
      date: new Date(2018,9,22),
      activity: activities[2]._id });
    return Trip.create(tripData);
  })
  .then(trips => {
    console.log(`Created ${trips.length} trips`);
    userData[0].trips = [
      trips[0]._id
    ];
    return User.create(userData);
  })
  .then(users => {
    console.log(`Created ${users.length} users.`);
    return Activity.create(activityData);
  })
  .catch(err => console.log(err))
  .finally(() => mongoose.connection.close());
