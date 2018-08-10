const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const dbinfo = require('../../hmst.config');

// console.log(dbinfo);

mongoose.connect('mongodb://localhost:27017/hmst', {
  useNewUrlParser: true,
});
mongoose.connection.on('connected', () => console.log('connected to MongoDB!'));

const modelsPath = path.join(__dirname, './../models');

fs.readdirSync(modelsPath).forEach(file => {
  if (file.indexOf('.js')) {
    require(path.join(modelsPath, file));
  }
});

mongoose.Promise = global.Promise;
