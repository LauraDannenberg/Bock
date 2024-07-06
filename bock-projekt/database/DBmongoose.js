const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB-Verbindung
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


// @Lance, hier kommen dann noch deine Routen rein von dem Discovern. Bspi.:

//const discoverRouter = require('./routes/discover');
//app.use('/disc/discover', discoverRouter);