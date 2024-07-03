// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let message = new Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId, ref:'profil'
  },
  text: {
    type: String
  },
  chat: {
    type: mongoose.Schema.Types.ObjectId, ref:'chat'
  }
},{
    collection: 'message'
});

module.exports = mongoose.model('message', message);