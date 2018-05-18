const router = require('express').Router();
const items = require('../controllers/items');
const orders = require('../controllers/orders');

router.route('/items')
  .get(items.itemIndex)
  .post(items.itemCreate);

router.route('/items/:id')
  .get(items.itemShow)
  .put(items.itemUpdate)
  .delete(items.itemDestroy);

router.route('/orders')
  .get(orders.orderIndex)
  .post(orders.orderCreate);

router.route('/orders/:id')
  .get(orders.orderShow)
  .put(orders.orderUpdate)
  .delete(orders.orderDestroy);

router.route('/*')
  .all((req, res) => res.status(404).json({ message: 'Not found' }));

module.exports = router;
