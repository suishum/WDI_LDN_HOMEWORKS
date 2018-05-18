const Order = require('../models/order');

function orderIndexRoute(req, res, next) {
  Order.find()
    .populate('order.beverage order.extra1 order.extra2')
    // I need to learn how this works properly =_=
    // .populate('order.beverage.item')
    // .populate('order.extra1.item')
    // .populate('order.extra2.item')
    .then(orders => res.json(orders))
    .catch(next);
}

function orderCreateRoute(req, res, next) {
  Order.create(req.body)
    .then(order => res.status(201).json(order))
    .catch(next);
}

function orderShowRoute(req, res, next) {
  Order.findById(req.params.id)
    .then(order => res.json(order))
    .catch(next);
}

function orderUpdateRoute(req, res, next) {
  Order.findById(req.params.id)
    .then(order => Object.assign(order, req.body))
    .then(order => order.save())
    .then(order => res.json(order))
    .catch(next);
}

function orderDestroyRoute(req, res, next) {
  Order.findById(req.params.id)
    .then(order => order.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}


module.exports = {
  orderIndex: orderIndexRoute,
  orderCreate: orderCreateRoute,
  orderShow: orderShowRoute,
  orderUpdate: orderUpdateRoute,
  orderDestroy: orderDestroyRoute
};
