
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let discoveryStats = new Schema({
  averageScore: {
    type: Double
},
  averageHighestScore: { 
    type: Double
}
   
}, {collection: "discoveryStats"});

module.exports = mongoose.model('discoverystats', discoveryStats);