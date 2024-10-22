const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const cors = require('cors');



const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB-Verbindung 27017
mongoose.connect('mongodb://localhost:27017/bock', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB verbunden'))
  .catch(err => console.log(err));

// Beispielroute, 
app.get('/', (req, res) => {
  res.send('Hallo Welt!!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});


// Profil: CRUD wird in routes/profil definiert
const profilRouter = require('./routes/profil');
app.use('/pro/', profilRouter);

const boardRouter = require('./routes/board');
app.use('/board', boardRouter);

const chatRouter = require('./routes/chat');
app.use('/chat', chatRouter);

const hobbyRouter = require('./routes/hobby');
app.use('/hobby', hobbyRouter);

const fachbereichRouter = require('./routes/fachbereich');
app.use('/fachbereich', fachbereichRouter);

const messageRouter = require('./routes/message');
app.use('/message', messageRouter);

const postRouter = require('./routes/post');
app.use('/post', postRouter);

const userRouter = require('./routes/user');
app.use('/user', userRouter);

const discoverRouter = require('./routes/discovery');
app.use('/disc', discoverRouter);
