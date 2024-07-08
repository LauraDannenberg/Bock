// post.user.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let user = new Schema({

  uname: {
    type: String,
    required: true
  },
  pwhash: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  }
  
},{
    collection: 'user'
});

module.exports = mongoose.model('user', user);