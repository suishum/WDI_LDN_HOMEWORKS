// THE FILENAME SHOULD ALWAYS BE SINGULAR. SINGULAR BOUNCER.

// this file will act as the bouncer for any new data that gets put into the database, therefore we need mongoose.
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  content: { type: String },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
});

commentSchema.methods.isOwnedBy = function(user) {
  return this.user && user._id.equals(this.user._id);
};

// schema is the set of rules our inserted data needs to follow
const schema = new mongoose.Schema({
  // server side validation
  name: { type: String, minlength: 2, required: true },
  origin: { type: String, minlength: 2, required: true },
  image: { type: String, pattern: 'https?://.+' },
  comments: [ commentSchema ]
});

// now export this cos we need to use it outside of this file.
module.exports = mongoose.model('Dogs', schema);
