// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let message = new Schema({
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  chat: {
    type: String,
    required: true
  }
},{
    collection: 'message'
});

module.exports = mongoose.model('message', message);