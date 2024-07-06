// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let board = new Schema({
  title: {
    name: String,
    required: true
  },
  
},{
    collection: 'board'
});

module.exports = mongoose.model('board', board);