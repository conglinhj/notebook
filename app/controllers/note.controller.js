const noteService = require("../services/note.service");

const noteController = {
  index: async (req, res, next) => {
    const notes = await noteService.findAll();

    res.json({
      data: {
        notes,
      },
    });
  },
  show: async (req, res, next) => {
    const note = await noteService.findById(req.params.id);

    res.json({
      data: {
        note,
      },
    });
  },
  create: async (req, res, next) => {
    const note = await noteService.create(req.body);

    res.json({
      data: {
        note,
      },
    });
  },
  update: async (req, res, next) => {
    const note = await noteService.update(req.params.id, req.body);

    res.json({
      data: {
        note,
      },
    });
  },
  delete: async (req, res, next) => {
    const result = await noteService.delete(req.params.id);

    res.json({
      data: {
        deleted: !!result,
      },
    });
  },
};

module.exports = noteController;
