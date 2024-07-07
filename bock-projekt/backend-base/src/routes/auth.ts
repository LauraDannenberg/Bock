import express, { Request, Response, NextFunction } from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/login', (req, res) => {
  res.send("not logged in.");
});

router.post('/login', passport.authenticate('local'), (req, res) => {
  console.log("some user logged in");
  res.send('Login successful');
});

router.post('/ldaplogin',
  passport.authenticate('ldap', {
    successRedirect: '/',
    failureRedirect: '/auth/login/'
  })
);

router.get('/logout', (req, res, next) => {
  req.logout(null, (err :any)=> {
    if(err){
        console.log("there was an error logging out:", err);
    }
  });
  res.send('Logout successful');
});

export default router;
