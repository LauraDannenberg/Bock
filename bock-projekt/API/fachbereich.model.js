// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let fachbereich = new Schema({
  name: {
    type: String
  },
},{
    collection: 'fachbereich'
});

module.exports = mongoose.model('fachbereich', fachbereich);