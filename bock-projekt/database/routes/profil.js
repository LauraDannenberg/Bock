const express = require('express');
const router = express.Router();
const Profil = require('../models/profil.model');

// Erstellen eines Profils
router.post('/makeprofile', async (req, res) => { 
  const profil = new Profil(req.body);
  try {
    const savedProfil = await profil.save();
    res.json(savedProfil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/search', async (req, res) => { // Hier kann man dynamisch die Parameter einbeziehen, wenn sie gesetzt wurden
  const query={}

  if (req.query.vorname) {
    query.vorname = req.query.vorname;
  }
  if (req.query.nachname) {
    query.nachname = req.query.nachname;
  }
  if (req.query.alter) {
    query.alter = parseInt(req.query.alter); // Alter als Zahl interpretieren
  }

  if (req.query.hobby) {
    query.hobby = req.query.hobby;
  }

  if (req.query.fachbereich) {
    query.fachbereich = req.query.fachbereich;
  }

  try {
    const profile = await Profil.find(query);
    res.json(profile);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Profil nach ID abrufen
router.get('/:id', async (req, res) => {
  try {
    const profil = await Profil.findById(req.params.id);
    if (profil == null) {
      return res.status(404).json({ message: 'Profil nicht gefunden' });
    }
    res.json(profil);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Profil nach ID aktualisieren
router.patch('/editprofile/:id', async (req, res) => {
  try {
    const profil = await Profil.findByIdAndUpdate(req.params.id, req.body, { new: true }); // wo gibt man die Parameter an die geupdatet werden sollen? Z.B Hobby
    if (profil == null) {
      return res.status(404).json({ message: 'Profil nicht gefunden' });
    }
    res.json(profil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Profil nach ID löschen
router.delete('/delprofile/:id', async (req, res) => {
  try {
    const profil = await Profil.findByIdAndDelete(req.params.id);
    if (profil == null) {
      return res.status(404).json({ message: 'Profil nicht gefunden' });
    }
    res.json({ message: 'Profil gelöscht' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
