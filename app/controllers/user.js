const db = require('../db');
const User = require('../models/user');

const userController = {
  index: async (req, res, next) => {
    await db.connect();

    const users = await User.find();

    res.render('user/list', {
      users: users
    });
  },
  show: async (req, res, next) => {
    await db.connect();

    const user = await User.findById(req.params.id);

    res.render('user/show', {
      user: user
    });
  },
  showCreateForm: async (req, res, next) => {
    res.render('user/create');
  },
  create: async (req, res, next) => {
    await db.connect();

    User.create({
      name: req.body.name,
      age: req.body.age,
    });

    res.redirect('/users');
  }
}

module.exports = userController;
