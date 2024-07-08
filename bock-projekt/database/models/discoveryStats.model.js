
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let discoveryStats = new Schema({
  averageScore: {
    type: Number
},
  averageHighestScore: { 
    type: Number
}
   
}, {collection: "discoveryStats"});

module.exports = mongoose.model('discoverystats', discoveryStats);