const mongoose = require('mongoose');

const usergetSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
});

const Userget = mongoose.model('Userget', usergetSchema);

module.exports = Userget;
