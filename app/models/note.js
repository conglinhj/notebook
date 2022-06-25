const mongoose = require('mongoose');

const Note = mongoose.model('Note', {
  title: String,
  content: String,
  createdDate: Date,
});

module.exports = Note;
