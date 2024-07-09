const express = require('express');
const router = express.Router();
const Post = require('../models/post.model');

// Erstellen eines Posts
router.post('/create', async (req, res) => { 
  const post = new Post(req.body);
  try {
    const savedPost = await post.save();
    res.json(savedPost);
  } catch (err) {
    res.status(400).json({ post: err.post });
  }
});


router.get('/', async (req, res) => {
  try {
    const poste = await Post.find({"author":req.params.author});
    res.json(poste);
  } catch (err) {
    res.status(500).json({ poste: err.post });
  }
});

router.get('/all', async (req, res) => {
  try {
    const poste = await Post.find({});
    res.json(poste);
  } catch (err) {
    res.status(500).json({ poste: err.post });
  }
});

router.get('/byBoard/:board', async (req, res) => {
  try {
    const poste = await Post.find({"board":req.params.board});
    res.json(poste);
  } catch (err) {
    res.status(500).json({ poste: err.post });
  }
});


/* Post nach ID abrufen
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (post == null) {
      return res.status(404).json({ post: 'Post nicht gefunden' });
    }
    res.json(post);
  } catch (err) {
    res.status(500).json({ post: err.post });
  }
});*/

// Post nach ID aktualisieren
// router.patch('/:id', async (req, res) => {
//   try {
//     const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true }); // wo gibt man die Parameter an die geupdatet werden sollen? Z.B Hobby
//     if (post == null) {
//       return res.status(404).json({ post: 'Post nicht gefunden' });
//     }
//     res.json(post);
//   } catch (err) {
//     res.status(400).json({ post: err.post });
//   }
// });

// Post nach ID löschen
router.delete('/:id', async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    if (post == null) {
      return res.status(404).json({ post: 'Post nicht gefunden' });
    }
    res.json({ post: 'Post gelöscht' });
  } catch (err) {
    res.status(500).json({ post: err.post });
  }
});

module.exports = router;
