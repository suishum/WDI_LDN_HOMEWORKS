const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Place = require('../models/place');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Place.create([{
    name: 'Big Chill',
    price: '££',
    address: 'Big Chill Brick Lane, Dray Walk, London E1 6QL',
    location: {
      lat: 51.5216,
      lng: -0.0723
    },
    rating: 4,
    image: 'http://www.travelstay.com/images/1745780/3/the_big_chill_bar.jpg'
  }, {
    name: 'Pizza Union',
    address: '29 Leman St, Whitechapel, London E1 8PT',
    rating: 4,
    price: '£',
    image: 'https://www.pizzaunion.com/content/themes/pizzaunionv4/images/pu-69.jpg',
    location: {
      lat: 51.514036,
      lng: -0.070421
    }
  }, {
    name: 'Leman Street Tavern',
    address: '31 Leman St, Whitechapel, London E1 8PT',
    rating: 4,
    price: '££',
    image: 'https://londonolios.files.wordpress.com/2016/03/0016.jpg',
    location: {
      lat: 51.5137488,
      lng: -0.0703101
    }
  }, {
    name: 'DF/Mexico',
    address: 'Hanbury Street, Shoreditch, London E1 6QR',
    rating: 4,
    price: '££',
    image: 'https://i.pinimg.com/564x/f0/c1/24/f0c1245e1f6f5491d3f0d2f7ad5da52a.jpg',
    location: {
      lat: 51.5203873,
      lng: -0.0753207
    }
  }, {
    name: 'Hoop & Grapes',
    address: '47 Aldgate High St, London EC3N 1AL',
    rating: 3,
    price: '££',
    image: 'https://i.pinimg.com/564x/f0/c1/24/f0c1245e1f6f5491d3f0d2f7ad5da52a.jpg',
    location: {
      lat: 51.5142291,
      lng: -0.0741393
    }
  }, {
    name: 'The White Hart',
    price: '£',
    address: '22 Great Suffolk St, London SE1 0UG',
    location: {
      lat: 51.5055205,
      lng: -0.1009277
    },
    rating: 4,
    image: 'https://lh5.googleusercontent.com/p/AF1QipPsLGNwbhRz4OAGd6zlyp1ehbgLeudRLo7Q1c41=w408-h306-k-no'
  }])
    .then(places => console.log(`${places.length} places created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
