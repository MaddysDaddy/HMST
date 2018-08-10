const mongoose = require('mongoose');
const Introduction = mongoose.model('Introduction');

module.exports = {
  index(req, res) {
    Introduction.find({})
      .then(introductions => res.json(introductions))
      .catch(error => {
        const errors = Object.keys(error.errors).map(key => error.errors[key].message);
        console.log('Introduction controller error: ', errors);
      })
  },

}
