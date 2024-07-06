const express = require('express');
const router = express.Router();
const Message = require('../models/message.model');

// Erstellen eines Messages
router.post('/create', async (req, res) => { 
  const message = new Message(req.body);
  try {
    const savedMessage = await message.save();
    res.json(savedMessage);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});


router.get('/byAuthor/:author', async (req, res) => {
  try {
    const messagee = await Message.find({"author":req.params.author});
    res.json(messagee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Message nach ID abrufen
router.get('/:id', async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);
    if (message == null) {
      return res.status(404).json({ message: 'Message nicht gefunden' });
    }
    res.json(message);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Message nach ID aktualisieren
// router.patch('/:id', async (req, res) => {
//   try {
//     const message = await Message.findByIdAndUpdate(req.params.id, req.body, { new: true }); // wo gibt man die Parameter an die geupdatet werden sollen? Z.B Hobby
//     if (message == null) {
//       return res.status(404).json({ message: 'Message nicht gefunden' });
//     }
//     res.json(message);
//   } catch (err) {
//     res.status(400).json({ message: err.message });
//   }
// });

// Message nach ID löschen
router.delete('/:id', async (req, res) => {
  try {
    const message = await Message.findByIdAndDelete(req.params.id);
    if (message == null) {
      return res.status(404).json({ message: 'Message nicht gefunden' });
    }
    res.json({ message: 'Message gelöscht' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
