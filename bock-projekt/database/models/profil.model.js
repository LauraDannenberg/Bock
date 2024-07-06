// profil.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let profil = new Schema({
  vorname: {
    type: String,
    required: true
  },
  nachname: {
    type: String
  },
  alter: {
    type: Number
  },
  fachbereich: {
    type: String,
    required: true 
  },
   hobbys: {
    type: [String],
    
   },
  beschreibung: {
    type: String
  }
},
{
    collection: 'profil'
});

module.exports = mongoose.model('profil', profil);