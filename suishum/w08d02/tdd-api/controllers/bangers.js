const Banger = require('../models/banger');

function indexRoute(req, res, next) {
  Banger.find()
    .then(bangers => res.json(bangers))
    .catch(next);
}

function createRoute(req, res, next) {
  Banger.create(req.body)
    .then(banger => res.status(201).json(banger))
    .catch(next);
}

function showRoute(req, res, next) {
  Banger.findById(req.params.id)
    .then(banger => res.json(banger))
    .catch(next);
}

function updateRoute(req, res, next) {
  Banger.findById(req.params.id)
    .then(banger => Object.assign(banger, req.body))
    .then(banger => banger.save())
    .then(banger => res.json(banger))
    .catch(next);
}

function deleteRoute(req, res, next) {
  Banger.findById(req.params.id)
    .then(banger => banger.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  create: createRoute,
  show: showRoute,
  update: updateRoute,
  delete: deleteRoute
};
