// make a router, this handles event handlers
const router = require('express').Router();
// controller
const dogs = require('../controllers/dogs');
const registrations = require('../controllers/registrations.js');
const sessions = require('../controllers/sessions');
const secureRoute = require('../lib/secureRoute');

// request handlers
router.get('/', (req, res) => res.render('pages/home'));
// RESTful routes (can be chained)
router.route('/dogs')
  .get(dogs.index)
  .post(secureRoute, dogs.create);

router.route('/dogs/new')
  .get(secureRoute, dogs.new);

router.route('/dogs/:id')
  .get(dogs.show)
  .put(secureRoute, dogs.update)
  .delete(secureRoute, dogs.delete);

router.route('/dogs/:id/edit')
  .get(secureRoute, dogs.edit);

router.route('/dogs/:id/comments')
  .post(secureRoute, dogs.commentsCreate);

router.route('/dogs/:id/comments/:commentId')
  .post(secureRoute, dogs.commentsDelete);

router.route('/register')
  .get(registrations.new)
  .post(registrations.create);

router.route('/login')
  .get(sessions.new)
  .post(sessions.create);

router.route('/logout')
  .get(sessions.delete);


// global error catcher, if someone tries to access a page that doesnt exist, the 404 views page will be shown
router.all('/*', (req, res) => res.render('pages/404'));

// export for use outside of this file
module.exports = router;
