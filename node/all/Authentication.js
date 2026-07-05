const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(session({
  secret: '',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === 'production', maxAge: 24 * 60 * 60 * 1000 } 
}));