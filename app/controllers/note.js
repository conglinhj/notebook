const db = require('../db');
const Note = require('../models/note');

const noteController = {
  index: async (req, res, next) => {
    const notes = await Note.find();

    res.json({
      data: {
        notes
      }
    });
  },
  show: async (req, res, next) => {
    const note = await Note.findById(req.params.id);

    res.json({
      data: {
        note
      }
    });
  },
  create: async (req, res, next) => {
    const note = await Note.create({
      title: req.body.title,
      content: req.body.content,
    });

    res.json({
      data: {
        note
      }
    });
  },
  update: async (req, res, next) => {
    const note = await Note.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      content: req.body.content,
    });

    res.json({
      data: {
        note
      }
    });
  },
  delete: async (req, res, next) => {
    const result = await Note.findByIdAndDelete(req.params.id);

    res.json({
      data: {
        success: !!result
      }
    });
  }
}

module.exports = noteController;
