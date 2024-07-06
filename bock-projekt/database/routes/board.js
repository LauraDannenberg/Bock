const express = require('express');
const router = express.Router();
const Board = require('../models/board.model');

// Erstellen eines Boards
router.post('/create', async (req, res) => { 
  const board = new Board(req.body);
  try {
    const savedBoard = await board.save();
    res.json(savedBoard);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/search', async (req, res) => {  // Hier kann man dynamisch die Parameter einbeziehen, wenn sie gesetzt wurden
  query={}
  if (req.query.name) {
    query.vorname = req.query.vorname;
  }
  try {
    const board = await Board.find(query);
    res.json(board);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Profil nach ID abrufen
router.get('/:id', async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    if (board == null) {
      return res.status(404).json({ message: 'Board nicht gefunden' });
    }
    res.json(board);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Profil nach ID aktualisieren
router.patch('/:id', async (req, res) => {
  try {
    const board = await Board.findByIdAndUpdate(req.params.id, req.body, { new: true }); // wo gibt man die Parameter an die geupdatet werden sollen? Z.B Hobby
    if (board == null) {
      return res.status(404).json({ message: 'Board nicht gefunden' });
    }
    res.json(board);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Profil nach ID löschen
router.delete('/:id', async (req, res) => {
  try {
    const board = await Board.findByIdAndDelete(req.params.id);
    if (board == null) {
      return res.status(404).json({ message: 'Board nicht gefunden' });
    }
    res.json({ message: 'Board gelöscht' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
