const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Dog = require('../models/dog');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Dog.create([{
    name: 'Gerald',
    image: 'https://pbs.twimg.com/profile_images/378800000501819812/352dbac0f66effb71cd7a0b98d1051a2.jpeg',
    breed: 'Chihuahua',
    description: 'This dude knows what\'s going on!',
    eyebrowLength: 4
  }, {
    name: 'Barry',
    image: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/10/funny-dogs-with-eyebrows-26-57f39569397a1__700.jpg',
    breed: 'Heinz 57 varieties',
    description: 'Have you ever seen a dog happier to have eyebrows?',
    eyebrowLength: 5
  }])
    .then(dogs => console.log(`${dogs.length} dogs worshipped`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());


});
