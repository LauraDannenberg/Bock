// chat.model.js

const { String } = require('core-js/shim');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let chat = new Schema({
  authoren: {
    type: [String]
  },
  board: {
    type: mongoose.Schema.Types.ObjectId, ref:'board'
  }
},{
    collection: 'Chat'
});

module.exports = mongoose.model('chat', chat);