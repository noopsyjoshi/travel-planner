const mongoose = require('mongoose'); // do we need to install that?
mongoose.Promise = require('bluebird'); // do we need to install that?

const activitiesData = [
  {
  'name': 'Mother Mash',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/AxMnSZ5ddiGEw-UeMyJ2Gg/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/mother-mash-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': ['british', 'food', 'Food'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.512935,
    'longitude': -0.139414
  },
  'price': '£'
},
{
  'name': 'Lanzhou Noodle Bar',
  'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/IKy91e7hb9w14m4eA9HH1w/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/lanzhou-noodle-bar-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'chinese', 'Noodles', 'Food'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.5116034713013,
    'longitude': -0.127834377873126
  },
  'price': '£'
},
{
  'name': 'The Mayfair Chippy',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/EQgkr1NzKqNjReCEhvwzrg/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/the-mayfair-chippy-london-2?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Fish & Chips' , 'Food'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.5131345,
    'longitude': -0.1533961
  },
  'price': '££'
},
{
  'name': 'Ffionas Restaurant',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/n4t7Oe5C3idM7YeAPbfKrg/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/ffionas-restaurant-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'British' , 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.50405773515,
    'longitude': -0.192783395566043
  },
  'price': '££'
},
{
  'name': 'Dishoom',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/s1qI8vxkt5NyD3i_zWdXTQ/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/dishoom-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Indian', 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.512447030091,
    'longitude': -0.1269579217873
  },
  'price': '££'
},
{
  'name': 'Laughing Halibut',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/MBM1we-BGvJxxDHyufu10A/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/laughing-halibut-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Fish & Chips' , 'Food'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.4966544699782,
    'longitude': -0.133777235475182
  },
  'price': '£'
},
{
  'name': 'Pieminister',
  'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/85R6hKcSgB--prREGAJhcA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/pieminister-london-3?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'British' , 'Food'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.508097,
    'longitude': -0.110384
  },
  'price': '£',
},
{
  'name': 'Flat Iron',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/bDKwRFQ6_kNUj8mU7VjhjA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/flat-iron-london-2?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Steakhouses', 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.51212,
    'longitude': -0.1384008
  },
  'price': '££',
},
{
  'name': 'The Fat Bear',
  'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/2bdjVK0HCopK4stu97Qk5w/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/the-fat-bear-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'American (Traditional)', 'Soul Food', 'Cajun/Creole' , 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.5131833881734,
    'longitude': -0.10138103121642
  },
  'price': '££'
},
{
  'name': 'Borough Market',
  'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/3jJyWOWQjUntLiAjDqGtbw/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/borough-market-london-3?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Farmers Market', 'Beer, Wine & Spirits' , 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.5051427191678,
    'longitude': -0.0909365332063361
  },
  'price': '££'
},
{
  'name': 'Duck & Waffle',
  'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/15koPwswFOJ3VVQBiBtCyg/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/duck-and-waffle-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Modern European', 'Bars', 'British' , 'Food'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.516178,
    'longitude': -0.08094
  },
  'price': '£££',
},
{
  'name': 'Great Queen Street',
  'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/XA79zMW9fQJXWjgXwQ36qQ/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/great-queen-street-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'British', 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.5152346,
    'longitude': -0.1217126
  },
  'price': '££'
},
{
  'name': 'CASK Pub and Kitchen',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/v9Y4JQ34NhataiS_WfYADA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/cask-pub-and-kitchen-london-2?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Pubs', 'Gastropubs' , 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.49135039773,
    'longitude': -0.13753688795203
  },
  'price': '££'
},
{
  'name': 'Baileys Fish and Chips',
  'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/UQYbh6PYiRIFpwx_3A0DiA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/baileys-fish-and-chips-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Fish & Chips', 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.4803741784593,
    'longitude': -0.204150203865423
  },
  'price': '£',
},
{
  'name': 'The Pig and Butcher',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/4qGnrSpdD_GgmHh1pz79MA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/the-pig-and-butcher-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'British', 'Gastropubs' , 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.537442542029,
    'longitude': -0.10682789450616
  },
  'price': '££'
},
{
  'name': 'Burger & Lobster',
  'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/GB6paWQKT8nqhK7eBtojyw/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/burger-and-lobster-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'American (Traditional)', 'Burgers', 'Seafood' , 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.50702196373,
    'longitude': -0.1455240253782
  },
  'price': '££'
},
{
  'name': 'The Golden Chippy',
  'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/beEg47c5JfGgy9le6u3imw/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/the-golden-chippy-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Fish & Chips', 'Food'],
  'rating': 5.0,
  'coordinates': {
    'latitude': 51.475864,
    'longitude': -0.018518
  },
  'price': '££',
},
{
  'name': 'Roti King',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/w8DG702PlQk58D_m3rZ18A/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/roti-king-london-2?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Indian', 'Asian Fusion', 'Singaporean' , 'Food'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.5291481,
    'longitude': -0.1320656
  },
  'price': '£'
},
{
  'name': 'The Grazing Goat',
  'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/s_jWXYs-Qch_Evqx22_odg/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/the-grazing-goat-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Gastropubs', 'British' , 'Food'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.515378341447,
    'longitude': -0.15823586449841
  },
  'price': '££'
},
{
  'name': 'Regency Café',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/HIbQ8iAjJLL8ofJBLKXJDA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/regency-caf%C3%A9-london-2?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Coffee & Tea', 'Breakfast & Brunch', 'British', 'Food'],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.4940143171,
    'longitude': -0.13222007974201
  },
  'price': '£'
},
{
  'name': 'The British Museum',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/GOkZih9qUFQmzKnxLenxfw/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/the-british-museum-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Museums' ],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.518298,
    'longitude': -0.126026
  }
},
{
  'name': 'Japanese Gallery',
  'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/icpyaGTWAQKe-EX3zm6pFQ/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/japanese-gallery-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Art Galleries' ],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.5050883,
    'longitude': -0.1936361
  },
},
{
  'name': 'Korean Cultural Centre UK',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/DCrFDUfVFC1iOIb23yNzug/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/korean-cultural-centre-uk-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Cultural Center' ],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.507561,
    'longitude': -0.126212
  },
},
{
  'name': 'Museum Of London',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/j2kbXGy1brifZaOoqtR5FA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/museum-of-london-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Museums', 'Art Galleries' ],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.5176485154852,
    'longitude': -0.0968295278152076
  },
  'price': '£',
},
{
  'name': 'Jewish Museum London',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/ataDCWH79h3TkJwK99Ya9w/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/jewish-museum-london-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Museums', 'Art Galleries' ],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.5371325,
    'longitude': -0.1444712
  },
  'price': '£',
},
{
  'name': 'Greek Cypriot Centre',
  'image_url': 'https://s3-media4.fl.yelpcdn.com/bphoto/0ZAWb9ikvQFFNyzCUkG0PA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/greek-cypriot-centre-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Cultural Center' ],
  'rating': 5.0,
  'coordinates': {
    'latitude': 51.6217995,
    'longitude': -0.17586
  },
},
{
  'name': 'Paddington Arts',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/9VYRSZZEnuSwyRHtIn7sAw/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/paddington-arts-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Community Service/Non-Profit', 'Music Venues', 'Performing Arts', 'Cultural Center'],
  'rating': 5.0,
  'coordinates': {
    'latitude': 51.5229066,
    'longitude': -0.1998672
  },
},
{
  'name': 'Irish Cultural Centre',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/RfuURZN0xG3MArnF8dWImg/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/irish-cultural-centre-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Cultural Center' ],
  'rating': 3.5,
  'coordinates': {
    'latitude': 51.4922707734027,
    'longitude': -0.225513894537139
  },
},
{
  'name': 'London Country Tours',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/s_vQ9aHX344v2ocfaZVqcA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/london-country-tours-tadworth?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Historical Tours', 'Walking Tours', 'Bus Tours' ],
  'rating': 5.0,
  'coordinates': {
    'latitude': 51.3760022002893,
    'longitude': -0.229089148342609
  },
},
{
  'name': 'Tender Product',
  'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/NmUMXcUx1xOq2oGjvtJpGA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/tender-product-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Art Galleries' ],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.510799407959,
    'longitude': -0.127742007374763
  },
  'price': '£',
},
{
  'name': 'Camden Arts Centre',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/hnIZMI9zTg5j-CAZG2zF9w/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/camden-arts-centre-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Performing Arts', 'Art Galleries' ],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.5510586247943,
    'longitude': -0.183591842651367
  },
  'price': '£',
},
{
  'name': 'state51',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/IzJaJewoC_R5tzWVpuPOVg/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/state51-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Music Venues', 'Cultural Center' ],
  'rating': 5.0,
  'coordinates': {
    'latitude': 51.5251792682723,
    'longitude': -0.072462223470211
  },
  'price': '£',
},
{
  'name': 'Darby & Joan Club',
  'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/2EixRqZdR8IUDmim8PE4eA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/darby-and-joan-club-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Community Service/Non-Profit', 'Cultural Center' ],
  'rating': 5.0,
  'coordinates': {
    'latitude': 51.4359329,
    'longitude': -0.124736
  },
},
{
  'name': 'Dulwich Picture Gallery',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/f9-dU4AXYHIX3ocsfrNAoA/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/dulwich-picture-gallery-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Art Galleries', 'Museums' ],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.4463139325697,
    'longitude': -0.0859307250688582
  },
  'price': '£',
},
{
  'name': 'Churchill War Rooms',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/Lm20woJGxigsc6VvOvKuxg/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/churchill-war-rooms-london-2?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Landmarks & Historical Buildings', 'Museums' ],
  'rating': 4.5,
  'coordinates': {
    'latitude': 51.502259,
    'longitude': -0.129341
  },
},
{
  'name': 'Tate Modern',
  'image_url': 'https://s3-media1.fl.yelpcdn.com/bphoto/Aidw1PFTmsNrDKsH_Q0CBQ/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/tate-modern-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Art Museums'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.5078610102146,
    'longitude': -0.0991344451904297
  },
},
{
  'name': 'The Flirting and Walking Tours of London',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/vcVgGkbWBE_3BkPhC34qNg/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/the-flirting-and-walking-tours-of-london-london-2?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Walking Tours'],
  'rating': 5.0,
  'coordinates': {
    'latitude': 51.509407043457,
    'longitude': -0.12849035859108
  },
},
{
  'name': 'Studio Voltaire',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/HjNMvsICs24TKMQCVhO2aQ/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/studio-voltaire-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Art Galleries' ],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.461815,
    'longitude': -0.133907
  },
},
{
  'name': 'Shoreditch Street Art Tours',
  'image_url': 'https://s3-media2.fl.yelpcdn.com/bphoto/rXeN8hqAXM8K36OMwRovxQ/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/shoreditch-street-art-tours-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Tours' ],
  'rating': 5.0,
  'coordinates': {
    'latitude': 51.5190614840601,
    'longitude': -0.0778591632843018
  },
},
{
  'name': 'IMT Gallery',
  'image_url': 'https://s3-media3.fl.yelpcdn.com/bphoto/8wVo9JJex4lkPn3-mf4V7w/o.jpg',
  'is_closed': false,
  'url': 'https://www.yelp.com/biz/imt-gallery-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw',
  'categories': [ 'Attractions', 'Art Galleries'],
  'rating': 4.0,
  'coordinates': {
    'latitude': 51.5314439,
    'longitude': -0.0564986
  },
},

		{
			"name": "Ain't Nothin' But...",
			"image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/vDYafb7CBIGWbFd2ohx08A/o.jpg",
			"is_closed": false,
			"url": "https://www.yelp.com/biz/aint-nothin-but-london?adjust_creative=wcqZ-io-_tQ0apkNmeclTw&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=wcqZ-io-_tQ0apkNmeclTw",
			"review_count": 93,
			"categories": [ 'Events',
				{
					"Jazz & Blues"
				{
					"Dance Clubs"
				},
				{
					"Wine Bars"
				}
			],
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
				{
					"Music Venues"
				},
				{
					"Cafes"
				},
				{
					"Dance Clubs"
				}
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
				{
					"Jazz & Blues"
				},
				{
					"Dance Clubs"
				}
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
				{
					"Lounges"
				},
				{
					"Cocktail Bars"
				}
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
				{
					"Dance Clubs"
				},
				{
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
	],
	"total": 1400,
	"region": {
		"center": {
			"longitude": -0.135955810546875,
			"latitude": 51.51283552118349
		}
	}
}





];
