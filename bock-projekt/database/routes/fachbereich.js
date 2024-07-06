const express = require('express');
const router = express.Router();
const Fachbereich = require('../models/fachbereich.model');

// Erstellen eines Fachbereichs
router.post('/create', async (req, res) => { 
  const fachbereich = new Fachbereich(req.body);
  try {
    const savedFachbereich = await fachbereich.save();
    res.json(savedFachbereich);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/getAll', async (req, res) => {
  try {
    const fachbereiche = await Fachbereich.find();
    res.json(fachbereiche);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Fachbereich nach ID abrufen
router.get('/:id', async (req, res) => {
  try {
    const fachbereich = await Fachbereich.findById(req.params.id);
    if (fachbereich == null) {
      return res.status(404).json({ message: 'Fachbereich nicht gefunden' });
    }
    res.json(fachbereich);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Fachbereich nach ID aktualisieren
router.patch('/edit/:id', async (req, res) => {
  try {
    const fachbereich = await Fachbereich.findByIdAndUpdate(req.params.id, req.body, { new: true }); // wo gibt man die Parameter an die geupdatet werden sollen? Z.B Hobby
    if (fachbereich == null) {
      return res.status(404).json({ message: 'Fachbereich nicht gefunden' });
    }
    res.json(fachbereich);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Fachbereich nach ID löschen
router.delete('/delete/:id', async (req, res) => {
  try {
    const fachbereich = await Fachbereich.findByIdAndDelete(req.params.id);
    if (fachbereich == null) {
      return res.status(404).json({ message: 'Fachbereich nicht gefunden' });
    }
    res.json({ message: 'Fachbereich gelöscht' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
