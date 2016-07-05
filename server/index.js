import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import config from './config.js';
import passport from 'passport';
let GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/../public'));

passport.use(new GoogleStrategy({
    clientID: config.google.GOOGLE_CLIENT_ID,
    clientSecret: config.google.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
  },
  function(accessToken, refreshToken, profile, cb) {
    console.log(profile);
  }
));

app.get('/auth/google',
  passport.authenticate('google', { scope: [ 'https://www.googleapis.com/auth/plus.me', 'https://www.googleapis.com/auth/calendar'] }));

app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    console.log('eyy baby');
  });

app.listen(config.PORT, () => {
  console.log('listening on port: ' + config.PORT);
});
