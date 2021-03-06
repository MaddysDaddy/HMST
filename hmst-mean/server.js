const express = require('express');
const parser = require('body-parser');
const path = require('path');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const port = process.env.PORT || 8000;

// const envs = require('dotenv').config({
//   path: path.join(__dirname, '/.env')
// });

const envs = require('dotenv').config();

const app = express();

// Serve it up with angular
app.use(express.static(path.resolve('dist/hmst-mean')));

// Parser config
app.use(parser.urlencoded({
  extended: true
}));
app.use(parser.json());

const sessionConfig = {
  saveUninitialized: true,
  secret: 'vPQNO6075G8H6HcUP4uJy3zZEq2iSqm9',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000
  }
};

app.use(cookieParser('ltakjejaiowjefoijwoiejfoiwjeofijsjijwef'));
app.use(session(sessionConfig));

// Bring in data and models
require('./server/config/mongoose');

//Bring in routes
app.use('/api/info', require('./server/config/routes'));
app.use('/auth/users', require('./server/config/auth-routes.js'));

// Catch all
app.use(require('./server/config/catch-all'));


// Setup localhost
app.listen(port, () => console.log(`listening on port ${port}`));
