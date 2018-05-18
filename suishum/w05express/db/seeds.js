// planting seeds require the use of mongoose, because we are handling the database
const mongoose = require('mongoose');
// use promises
mongoose.Promise = require('bluebird');
// it also requires the use of a model (the data bouncer), the file name is ALWAYS SINGULAR
const Dog = require('../models/dog');
// and the use of a data source (in this case b/c our database is empty and we want to populate it with the items we have in the object)
const dogData = require('./data/dogs');

// connect mongoose to a database, if the name did not exist before, it would create a new database for you.
mongoose.connect('mongodb://localhost/dog-database', (err, db) => {
  db.dropDatabase();
  Dog.create(dogData)
    .then(dogs => console.log(`${dogs.length} dogs created`))
    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close());
});

Dog.find((err, dogs) => console.log(dogs)); // get all the dogs
