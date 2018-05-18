const router = require('express').Router();
const dogs = require('../controllers/dogs');

router.route('/dogs')
  .get(dogs.index)
  .post(dogs.create);

router.route('/dogs/:id')
  .get(dogs.show)
  .put(dogs.update)
  .delete(dogs.delete);

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
