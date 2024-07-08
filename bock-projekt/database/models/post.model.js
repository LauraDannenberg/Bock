// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let post = new Schema({
  author: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  board: {
    type: String,
    required: true
  }
},{
    collection: 'post'
});

module.exports = mongoose.model('post', post);