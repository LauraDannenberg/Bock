const express = require('express');
const router = express.Router();
const Chat = require('../models/chat.model');

// Erstellen eines chats
router.post('/', async (req, res) => { 
  const chat = new Chat(req.body);
  try {
    const savedChat = await chat.save();
    res.json(savedChat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Übersicht aller Chats, übergibt eigene id für Authoren. ERSTMAL STRING NACHNAME
router.get('/overview/:nachname', async (req, res) => {
  try {
    const chat = await Chat.find({"author":req.params.nachname});
    res.json(chat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Chat nach ID abrufen
router.get('/:id', async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (chat == null) {
      return res.status(404).json({ message: 'chat nicht gefunden' });
    }
    res.json(chat);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// // chat nach ID aktualisieren
// router.patch('/:id', async (req, res) => {
//   try {
//     const chat = await Chat.findByIdAndUpdate(req.params.id, req.body, { new: true }); // wo gibt man die Parameter an die geupdatet werden sollen? Z.B Hobby
//     if (chat == null) {
//       return res.status(404).json({ message: 'Chat nicht gefunden' });
//     }
//     res.json(chat);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// chat nach ID löschen
router.delete('/:id', async (req, res) => {
  try {
    const chat = await Chat.findByIdAndDelete(req.params.id);
    if (chat == null) {
      return res.status(404).json({ message: 'Chat nicht gefunden' });
    }
    res.json({ message: 'Chat gelöscht' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
