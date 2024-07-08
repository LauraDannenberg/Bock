import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';
import { createUser } from '../model/user';

const router = express.Router();

router.get('/login', (req, res) => {
  res.send("not logged in.");
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  let dat = req.body;
  console.log(dat);
  console.log("some user logged in");
  res.send('Login successful');
});

router.post('/register', (req, res) => {
    let dat = req.body;
    console.log(dat);
    createUser(dat.username, dat.password, dat.email, "hsbo", []).catch( err =>{
      console.log(err)
      res.status(500).send("internal server error");
    }    
  );
  res.status(200).send('registration successful');
});


router.get('/logout', (req, res, next) => {
  req.logout(null, (err :any)=> {
    if(err){
        console.log("there was an error logging out:", err);
    }
  });
  res.send('Logout successful');
});

export default router;
