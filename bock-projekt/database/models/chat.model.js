// chat.model.js


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let chat = new Schema({
  authoren: {
    type: [String],
    required: true
  },
  board: {
    type: String
  }
},{
    collection: 'chat'
});

module.exports = mongoose.model('chat', chat);