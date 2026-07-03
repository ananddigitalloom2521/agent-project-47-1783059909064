const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String
});

const dataSchema = new mongoose.Schema({
  type: String,
  value: String
});

const UserModel = mongoose.model('User', userSchema);
const DataModel = mongoose.model('Data', dataSchema);

module.exports = { UserModel, DataModel };