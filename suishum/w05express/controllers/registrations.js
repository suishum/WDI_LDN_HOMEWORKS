const User = require('../models/user');

function newRoute(req, res) {
  // take the new user to the sign up form
  res.render('registrations/new');
}

function createRoute(req, res, next) {
  // create a user with the form information (req.body)
  User.create(req.body)
    // after that redirect the user
    .then(() => res.redirect('/dogs'))
    .catch(next);
}

module.exports = {
  new: newRoute,
  create: createRoute
};
