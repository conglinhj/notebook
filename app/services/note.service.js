const Note = require('../models/note');

const noteService = {
  findAll: () => {
    return Note.find();
  },
  findById: (id) => {
    return Note.findById(id);
  },
  create: (data) => {
    return Note.create({
      title: data.title,
      content: data.content,
    });
  },
  update: async (id, data) => {
    const note = await Note.findById(id);

    if (!note) {
      // TODO: throw not found exception
      return null;
    }

    return Note.findByIdAndUpdate(id, data, { new: true });
  },
  delete: (id) => {
    return Note.findByIdAndDelete(id);
  }
}

module.exports = noteService;
