const router = require('express').Router();
const bangers = require('../controllers/bangers');
const auth = require('../controllers/auth');
const secureRoute = require('../lib/secureRoute');

router.route('/bangers')
  .get(bangers.index)
  .post(secureRoute, bangers.create);

router.route('/bangers/:id')
  .get(bangers.show)
  .put(secureRoute, bangers.update)
  .delete(secureRoute, bangers.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
