const mongoose = require('mongoose');

const db = {
  connect: () => {
    return mongoose.connect('mongodb://localhost:27017', {
      dbName: 'notebook',
      user: 'root',
      pass: 'example'
    });
  }
};

module.exports = db;
