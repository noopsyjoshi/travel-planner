const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  imageUrl: String,
  location: String // this is the user's location (ex. home town)
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
