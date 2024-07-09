const express = require('express');
const router = express.Router();
const User = require('../models/user.model');
const Profil =require('../models/profil.model');




router.options('/create', function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.end();
});
// Erstellen eines Users
router.post('/create', async (req, res) => { 
  const user = new User(req.body);
  try {
    
    const createdProfile = new Profil({vorname:' ',nachname:' ',alter:0,fachbereich:" ",hobbys:[],beschreibung:' ',besitzer: user._id});
    const savedProfile = await createdProfile.save();
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/search', async (req, res) => {  // Hier kann man dynamisch die Parameter einbeziehen, wenn sie gesetzt wurden
  query= req.body;

  try {
    const user = await User.find(query);
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Profil nach ID abrufen
router.get('/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User nicht gefunden' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/getProfile', async (req, res) => {
  query= req.body;
  try {
    const user = await User.findOne(query);
    const profile = await Profile.findOne({besitzer: user._id})
    if (user == null) {
      return res.status(404).json({ message: 'User nicht gefunden' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Profil nach ID aktualisieren
router.patch('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }); // wo gibt man die Parameter an die geupdatet werden sollen? Z.B Hobby
    if (user == null) {
      return res.status(404).json({ message: 'User nicht gefunden' });
    }
    res.json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Profil nach ID löschen
router.delete('/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (user == null) {
      return res.status(404).json({ message: 'User nicht gefunden' });
    }
    res.json({ message: 'User gelöscht' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
module.exports = router;
