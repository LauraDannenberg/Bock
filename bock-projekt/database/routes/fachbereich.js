const express = require('express');
const router = express.Router();
const Profil = require('../models/profil.model');

// Erstellen eines Profils
router.post('/', async (req, res) => { 
  const profil = new Profil(req.body);
  try {
    const savedProfil = await profil.save();
    res.json(savedProfil);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const profile = await Profil.find();
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
router.patch('/:id', async (req, res) => {
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
router.delete('/:id', async (req, res) => {
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
