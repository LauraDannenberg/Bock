// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let hobby = new Schema({
  name: {
    type: String,
    required: true
  },
  kategorie: {
    type: [String]
  }
},{
    collection: 'hobbys'
});

module.exports = mongoose.model('hobbys', hobby);