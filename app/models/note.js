const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  title: String,
  content: String,
  createdDate: Date,
});

module.exports = mongoose.model('Note', schema);
