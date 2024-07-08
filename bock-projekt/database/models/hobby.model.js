// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let hobby = new Schema({
  name: {
    type: String,
    required: Boolean
  },
  kategorie: {
    type: [String]
  }
},{
    collection: 'hobby'
});

module.exports = mongoose.model('hobby', hobby);