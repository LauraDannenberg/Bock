// post.model.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Post
let profil = new Schema({
  vorname: {
    type: String
  },
  nachname: {
    type: String
  },
  alter: {
    type: Number
  },
  fachbereich: {
    type: mongoose.Schema.Types.ObjectId, ref:'fachbereich'
  },
  hobbys: {
    type: [hobbys]
  },
  beschreibung: {
    type: String
  }
},
{
    collection: 'profil'
});

module.exports = mongoose.model('profil', profil);