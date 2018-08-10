const mongoose = require('mongoose');

const introductionSchema = mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  description: {
    type: String,
    minLength: 50
  }
}, {
  timestamps: true,
  usePushEach: true
})

module.exports = mongoose.model('Introduction', introductionSchema);
