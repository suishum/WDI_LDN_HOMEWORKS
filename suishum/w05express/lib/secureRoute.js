// used to stop unauthenticated users from getting onto certain pages. like a filter, use in router.js

function secureRoute(req, res, next) {
  // check if the user is not logged in
  if(!req.session.userId) {
    // .regenerate clears the session cookie
    return req.session.regenerate(() => {
      // use danger here because its a bulma class
      req.flash('danger', 'You must be logged in to do that.');
      res.redirect('/login');
    });
  }
  // once we have confirmed that the user IS logged in, move into the next task.
  next();
}

module.exports = secureRoute;
