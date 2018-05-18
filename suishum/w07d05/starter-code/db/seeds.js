const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Item = require('../models/item');
const itemData = require('./data/items');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();
  Item.create(itemData)
    .then(items => console.log(`Cool man, ${items.length} items created.`))
    .catch((err) => console.log(err))
    .finally(() => mongoose.connection.close());
});

// seed an example order too when possible
