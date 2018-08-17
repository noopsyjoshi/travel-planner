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
<<<<<<< HEAD

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
=======
},

		{
			"name": "Ain't Nothin' But...",
			"image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vDYafb7CBIGWbFd2ohx08A/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/aint-nothin-but-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 93,
			"categories": [ 'Events',
					"Jazz & Blues",
					"Dance Clubs",
					"Wine Bars", ],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.5129631039042,
				"longitude": -0.139623144472486
			},
			"price": "££",
		},
		{
			"name": "The Troubadour",
			"image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/Zor2WaKDJ67brS4PMxm77A/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/the-troubadour-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 90,
			"categories": [ 'Events',
					"Music Venues",
					"Cafes",
					"Dance Clubs"
			],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.488822437999,
				"longitude": -0.19190476580433
			},
			"price": "££",
			"display_phone": "+44 20 7370 1434",
		},
		{
			"name": "Ronnie Scott's Jazz Club",
			"image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/7ezCNh1dn5jeH1q_u09MIQ/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/ronnie-scotts-jazz-club-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 137,
			"categories": [ 'Events',
					"Jazz & Blues",
					"Dance Clubs"
			],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.5133855,
				"longitude": -0.1315816
			},
			"price": "£££",
		},
		{
			"name": "Nightjar",
			"image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/yzyTg5QidNVxlEqH1BXOXg/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/nightjar-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 167,
			"categories": [ 'Events',
					"Lounges",
					"Cocktail Bars"
			],
			"rating": 4.5,
			"coordinates": {
				"latitude": 51.5265350341797,
				"longitude": -0.0877109989523888
			},
			"price": "£££",
		},
		{
			"name": "Fabric",
			"image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/4emoT1vXzePoCUmJJK65sw/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/fabric-london-2?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 188,
			"categories": [ 'Events',
					"Dance Clubs",
					"Music Venues"
				}
			],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.5196084163624,
				"longitude": -0.102471799978848
			},
			"price": "£££",
		},
		{
			"name": "Spiritual Caipirinha Bar",
			"image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/-qvx10r9d4r0sWU8CCAs4Q/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/spiritual-caipirinha-bar-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 13,
			"categories": [ 'Events',
				{
					"Bars"
				},
				{
					"Music Venues"
				}
			],
			"rating": 4.5,
			"coordinates": {
				"latitude": 51.543273,
				"longitude": -0.14892
			},
			"price": "££",
		},
		{
			"name": "The Social",
			"image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/fiS1BPBL930Z2YwwKIiZAw/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/the-social-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 59,
			"categories": [ 'Events',
				{
					"Bars"
				},
				{
					"Dance Clubs"
				},
				{
					"Music Venues"
				}
			],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.5174,
				"longitude": -0.140846
			},
			"price": "££",
		},
		{
			"name": "The Crobar",
			"image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/6oJDu_9WJSz1zhrj6F8fNw/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/the-crobar-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 42,
			"categories": [ 'Events',
				{
					"Music Venues"
				},
				{
					"Dance Clubs"
				},
				{
					"Pubs"
				}
			],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.514867642482,
				"longitude": -0.13033772564174
			},
			"price": "£",
		},
		{
			"name": "Jazz After Dark",
			"image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/U3IgFL-weRLLTAKDx_F_2w/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/jazz-after-dark-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 19,
			"categories": [ 'Events',
				{
					"Jazz & Blues"
				}
			],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.514502,
				"longitude": -0.131048
			},
			"price": "££",
		},
		{
			"name": "Wicked",
			"image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/SzNhdz2Yd1tYmZ_E3UhKFg/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/wicked-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 113,
			"categories": [ 'Events',
				{
					"Performing Arts"
				}
			],
			"rating": 4.5,
			"coordinates": {
				"latitude": 51.4954655032239,
				"longitude": -0.142908096313477
			},
		},
		{
			"name": "Matilda",
			"image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/d9uVysg3c_6mzeDQnonzCQ/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/matilda-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 27,
			"categories": [ 'Events',
				{
					"Performing Arts"
				}
			],
			"rating": 4.5,
			"coordinates": {
				"latitude": 51.513650212979,
				"longitude": -0.126782655715942
			},
		},
		{
			"name": "Hootananny",
			"image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/6HnZHF-7feT3dtbbN6iwFw/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/hootananny-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 36,
			"categories": [ 'Events',
				{
					"Pubs"
				},
				{
					"Music Venues"
				}
			],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.4553348340329,
				"longitude": -0.113342337031209
			},
			"price": "££",
		},
		{
			"name": "Royal Academy Of Music",
			"image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/gLqPTDdLy2AbnjlnBqYVvw/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/royal-academy-of-music-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 8,
			"categories": [ 'Events',
				{
					"Education"
				},
				{
					"Music Venues"
				}
			],
			"rating": 5.0,
			"coordinates": {
				"latitude": 51.523622,
				"longitude": -0.152168
			},
		},
		{
			"name": "606 Club",
			"image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/3Cssf_xJItznixrne8JUDw/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/606-club-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 30,
			"categories": [ 'Events',
				{
					"Jazz & Blues"
				},
				{
					"Music Venues"
				},
				{
					"American (New)"
				}
			],
			"rating": 4.5,
			"coordinates": {
				"latitude": 51.47813751937,
				"longitude": -0.1819652922312
			},
			"price": "££",
		},
		{
			"name": "Queen's Theatre",
			"image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/Z_xRM_Gh9QO3Cq8KCGWYGg/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/queens-theatre-london-7?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 57,
			"categories": [ 'Events',
				{
					"Performing Arts"
				}
			],
			"rating": 4.5,
			"coordinates": {
				"latitude": 51.511847,
				"longitude": -0.132627779020711
			},
		},
		{
			"name": "The Bootlegger",
			"image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/XBesPzlBglu-BA7Istp5Nw/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/the-bootlegger-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 2,
			"categories": [ 'Events',
				{
					"Cocktail Bars"
				},
				{
					"Hot Dogs"
				},
				{
					"Jazz & Blues"
				}
			],
			"rating": 5.0,
			"coordinates": {
				"latitude": 51.5119544,
				"longitude": -0.083457
			},
		},
		{
			"name": "The George Tavern",
			"image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/84TMO00uBweJRGbEAzJxuQ/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/the-george-tavern-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 18,
			"categories": [ 'Events',
				{
					"Dive Bars"
				},
				{
					"Music Venues"
				}
			],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.514333,
				"longitude": -0.053114
			},
			"price": "£",
		},
		{
			"name": "The Amersham Arms",
			"image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/1IF1IwMdLGu_tbJ60arlgQ/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/the-amersham-arms-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 30,
			"categories": [ 'Events',
				{
					"Pubs"
				},
				{
					"Dance Clubs"
				},
				{
					"Music Venues"
				}
			],
			"rating": 4.0,
			"coordinates": {
				"latitude": 51.4757511346773,
				"longitude": -0.0325703456536754
			},
			"price": "££",
		},
		{
			"name": "Royal Albert Hall",
			"image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/NCCK2AjtvsSdZr8is42RNQ/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/royal-albert-hall-kensington?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 207,
			"categories": [ 'Events',
				{
					"Music Venues"
				},
				{
					"Venues & Event Spaces"
				}
			],
			"rating": 4.5,
			"coordinates": {
				"latitude": 51.5009964375442,
				"longitude": -0.177414610229825
			},
			"price": "££",
		},
		{
			"name": "Roundhouse",
			"image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/yi53eju5ngHUkdLnuFtzLg/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/roundhouse-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 126,
			"categories": [ 'Events',
				{
					"Music Venues"
				},
				{
					"Performing Arts"
				},
				{
					"Cultural Center"
				}
			],
			"rating": 4.5,
			"coordinates": {
				"latitude": 51.543409,
				"longitude": -0.150961
			},
			"price": "££",
		}
  };
];
>>>>>>> creating-london-activity-seeds
