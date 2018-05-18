const Dog = require('../models/dog');

function indexRoute(req, res, next) {
  Dog.find()
    .then(dogs => res.json(dogs))
    .catch(next);
}

function createRoute(req, res, next) {
  Dog.create(req.body)
    .then(dog => res.status(201).json(dog))
    .catch(next);
}

function showRoute(req, res, next) {
  Dog.findById(req.params.id)
    .then(dog => res.json(dog))
    .catch(next);
}

function updateRoute(req, res, next) {
  Dog.findById(req.params.id)
    .then(dog => Object.assign(dog, req.body))
    .then(dog => dog.save())
    .then(dog => res.json(dog))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Dog.findById(req.params.id)
    .then(dog => dog.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
