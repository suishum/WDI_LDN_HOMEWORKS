// THIS IS THE PAGE THAT GETS RUN WHEN OUR WEBSITE IS ACCESSED, THIS MERGES ALL OF OUR FILES TOGETHER

// third party dependancies
// for views
const express = require('express');
const expressLayouts = require('express-ejs-layouts');
// for model/database interactions
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
// body parser for NEW stage to interpret form input, configure, see below
const bodyParser = require('body-parser');
// method override for UPDATE to use the PUT method, configure, see below
const methodOverride = require('method-override');
// router
const router = require('./config/router');
// need this so users can log in and stay logged in, for session cookies
const session = require('express-session');
const flash = require('express-flash');
const userAuth = require('./lib/userAuth');


// create the express app
const app = express();
// set a port number
const PORT = 8000;

// connect to the database
mongoose.connect('mongodb://localhost/dog-database');

// set up the view engine
app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(expressLayouts);

// tells express to serve static files from the public folder
app.use(express.static(`${__dirname}/public`));

// set up body parser, MUST BE BEFORE THE ROUTER!!
app.use(bodyParser.urlencoded({ extended: true }));

// method override must go after bodyParser
app.use(methodOverride(req => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));

// set up session cookies, so users can log in and stay logged in
app.use(session({
  secret: 'GysHa^72u91sk0P(', // a random key used to encrypt the session cookie, session secret
  resave: false,
  saveUninitialized: false
}));

//set up flash messages, must be AFTER express-session
app.use(flash());

// authorising users
app.use(userAuth);

// use the router for all other requests
app.use(router);

// set up global error catcher
// app.use((err, req, res, next) => {
//   if (err.name === 'ValidationError') return res.render('pages/422'); // 422 form validation error
//   // 500 is server error
//   res.render('pages/500', { err });
//   next(err); // next is a callback function that that says once the prvious commands are done, do this.
// });
app.use((err, req, res, next) => { // eslint-disable-line
  console.log(err); //display error in terminal
  if(err.name === 'ValidationError') return res.render('pages/422');
  res.render('pages/500', { err });
});

// .listen stuff should always come last
app.listen(PORT, () => console.log(`Up and running on port: ${PORT}`));
