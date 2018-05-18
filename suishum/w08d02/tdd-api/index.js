const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
const router = require('./config/router');

const { dbURI, port } = require('./config/environment');

const app = express();
// app.use(express.static(`${__dirname}/public`));

mongoose.connect(dbURI);
app.use(bodyParser.json());

app.use('/api', router);

// from our 'should return a 422 response if the passwords don\'t match' test we discovered that the status code returned for mismatching passwords is 500, we need to correct this. write JUST enough code to make the test pass, thats what TDD is.
app.use((err, req, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(422).json({ message: 'Unprocessable Entity' });
  }
  res.status(500).json({ message: 'Internal Server Error' });
  next();
});

app.listen(port, () => console.log(`It's tuesday my dude, pulling into ${port}`));

// we are exporting app here so we can use it in our test suite.
module.exports = app;
