// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let board = new Schema({
  title: {
    name: String
  },
  
},{
    collection: 'board'
});

module.exports = mongoose.model('board', board);