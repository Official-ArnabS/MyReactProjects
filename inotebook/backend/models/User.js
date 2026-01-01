const mongoose = require('mongoose');
const UserSchema = new Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    requried: true,
    unique: true
  },
  password:{
    type: String,
    requried: true
  },
  date:{
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('user',UserSchema);