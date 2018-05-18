const Item = require('../models/item');

function itemIndexRoute(req, res, next) {
  Item.find()
    .then(items => res.json(items))
    .catch(next);
}

function itemCreateRoute(req, res, next) {
  Item.create(req.body)
    .then(item => res.status(201).json(item))
    .catch(next);
}

function itemShowRoute(req, res, next) {
  Item.findById(req.params.id)
    .then(item => res.json(item))
    .catch(next);
}

function itemUpdateRoute(req, res, next) {
  Item.findById(req.params.id)
    .then(item => Object.assign(item, req.body))
    .then(item => item.save())
    .then(item => res.json(item))
    .catch(next);
}

function itemDestroyRoute(req, res, next) {
  Item.findById(req.params.id)
    .then(item => item.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}


module.exports = {
  itemIndex: itemIndexRoute,
  itemCreate: itemCreateRoute,
  itemShow: itemShowRoute,
  itemUpdate: itemUpdateRoute,
  itemDestroy: itemDestroyRoute
};
