const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  _id:        { type: String },
  username:   { type: String },
  password:   { type: String },
  email:      { type: String },
  firstName:  { type: String },
  lastName:   { type: String },
  created:    { type: Date },
  updated:    { type: Date, default: null },
});

const UserModel = mongoose.model('User', UserSchema);


module.exports = { UserModel };