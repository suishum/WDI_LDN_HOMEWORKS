// doing this allows the user to see the corrent navbar when logged in and out

const User = require('../models/user');

function userAuth(req, res, next) {
  // if there is no user ID, then there is nothing to do, move onto the routes.
  if(!req.session.userId) return next();
  // otherwise use the ID to find the user in the database
  User
    .findById(req.session.userId)
    .then(user => {
      // if the user hasn't been found (perhaps they have deleted their account)
      // log them out (delete the data in the session)
      if(!user) req.session.regenerate(() => res.redirect('/login'));
      // add some helpers to res.locals to be used in the views.
      res.locals.isAuthenticated = true;
      res.locals.currentUser = user;
      // store the user data on 'req' to be used inside the controllers
      req.currentUser = user;
      // after this is done, move onto the next task
      next();
    });
}

module.exports = userAuth;
