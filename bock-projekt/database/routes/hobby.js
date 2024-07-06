const express = require('express');
const router = express.Router();
const Hobby = require('../models/hobby.model');

// Erstellen eines Hobbys
router.post('/create', async (req, res) => { 
  const hobby = new Hobby(req.body);
  try {
    const savedHobby = await hobby.save();
    res.json(savedHobby);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/getAll', async (req, res) => {
  try {
    const hobby = await Hobby.find();
    res.json(hobby);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Hobby nach ID abrufen
router.get('/:id', async (req, res) => {
  try {
    const hobby = await Hobby.findById(req.params.id);
    if (hobby == null) {
      return res.status(404).json({ message: 'Hobby nicht gefunden' });
    }
    res.json(hobby);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Hobby nach ID aktualisieren
router.patch('/edit/:id', async (req, res) => {
  try {
    const hobby = await Hobby.findByIdAndUpdate(req.params.id, req.body, { new: true }); // wo gibt man die Parameter an die geupdatet werden sollen? Z.B Hobby
    if (hobby == null) {
      return res.status(404).json({ message: 'hobby nicht gefunden' });
    }
    res.json(hobby);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Hobby nach ID löschen
router.delete('/delete/:id', async (req, res) => {
  try {
    const hobby = await Hobby.findByIdAndDelete(req.params.id);
    if (hobby == null) {
      return res.status(404).json({ message: 'Hobby nicht gefunden' });
    }
    res.json({ message: 'Hobby gelöscht' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
