// CREATE A USER MODEL

// needs mongoose to add and pull from database
const mongoose = require('mongoose');
// needs bcrypt to hash passwords
const bcrypt = require('bcrypt');

// user form schema
const schema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// setting up the password confirmation virtual (something that needs to be tested but not stored in the database)
schema
  .virtual('passwordConfirmation')
  .set(function setPasswordConfirmation(passwordConfirmation) {
    // store the password on the user model temporarily so we can access it in our pre-validate hook
    // 'this' here refers to our user object
    this._passwordConfirmation = passwordConfirmation;
  });

// setting up a pre-validate hook
schema.pre('validate', function checkPassword(next) {
  // this checks if the password has been modified (from the one on record) and also checks if the new password and passwordConfirmation match.
  // if it the above requirements arent met, invalidate the password confirmation so that the validations fail
  if(this.isModified('password') && this._passwordConfirmation !== this.password) this.invalidate('passwordConfirmation', 'does not match');
  // otherwise continuse to the next step
  next();
});

// setting up a pre-save hook?
schema.pre('save', function hashPassword(next) {
  // if the password has been modified, if needs to be hashed
  if(this.isModified('password')) {
    // hash the password with bcrypt and store the hashed password on the user object
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  }
  // now continue to the next step (which is save)
  next();
});

schema.methods.validatePassword = function validatePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = mongoose.model('User', schema);
