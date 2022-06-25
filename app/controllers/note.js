const db = require('../db');
const Note = require('../models/note');

const noteController = {
  index: async (req, res, next) => {
    await db.connect();

    const notes = await Note.find();

    res.render('note/list', {
      notes: notes
    });
  },
  show: async (req, res, next) => {
    await db.connect();

    const note = await Note.findById(req.params.id);

    res.render('note/show', {
      note: note
    });
  },
  showCreateForm: async (req, res, next) => {
    res.render('note/create');
  },
  create: async (req, res, next) => {
    await db.connect();

    Note.create({
      title: req.body.title,
      content: req.body.content,
    });

    res.redirect('/notes');
  }
}

module.exports = noteController;
