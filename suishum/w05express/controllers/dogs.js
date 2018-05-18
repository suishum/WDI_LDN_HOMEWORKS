// requires models
const Dog = require('../models/dog');

function indexRoute(req, res) {
  //use dog model to get data from database
  Dog.find()
    .then(dogs => res.render('dogs/index', { dogs }));
}

function newRoute(req, res) {
  res.render('dogs/new');
}

function createRoute(req, res, next) {
  Dog.create(req.body)
    .then(() => res.redirect('/dogs'))
    .catch(next);
}

function showRoute(req, res, next) {
  console.log(req.params);
  Dog.findById(req.params.id)
  // if you want more information than the user id, you must populate
    .populate('comments.user')
    .then(dog => {
      if(!dog) return res.render('pages/404');
      res.render('dogs/show', { dog });
    })
    .catch(next);
}

function editRoute(req, res) {
  Dog.findById(req.params.id)
    .then(dog => res.render('dogs/edit', { dog }));
}

function updateRoute(req, res) {
  Dog.findById(req.params.id)
    .then(dog => Object.assign(dog, req.body))
    .then(dog => dog.save())
    .then(() => res.redirect(`/dogs/${req.params.id}`));
}

function deleteRoute(req, res) {
  Dog.findById(req.params.id)
    .then(dog => dog.remove())
    .then(() => res.redirect('/dogs'));
}

function commentsCreateRoute(req, res, next) {
  req.body.user = req.currentUser;
  Dog.findById(req.params.id)
    .then(dog => {
      dog.comments.push(req.body);
      return dog.save();
    })
    .then(dog => res.redirect(`/dogs/${dog._id}`))
    .catch(next);
}

function commentsDeleteRoute(req, res, next) {
  Dog.findById(req.params.id)
    .then(dog => {
      const comment = dog.comments.id(req.params.commentId);
      comment.remove();
      return dog.save();
    })
    .then(dog => res.redirect(`/dogs/${dog._id}`))
    .catch(next);
}

// we wanna use this in the router file so export
module.exports = {
  index: indexRoute,
  new: newRoute,
  create: createRoute,
  show: showRoute,
  edit: editRoute,
  update: updateRoute,
  delete: deleteRoute,
  commentsCreate: commentsCreateRoute,
  commentsDelete: commentsDeleteRoute
};
