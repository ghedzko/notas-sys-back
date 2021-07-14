const Note = require("../models/Note");

function createNote(req, res) {
  const { noteNumber, sender, addressee, description, sendDate, tag } =
    req.body;
  const newNote = new Note({
    noteNumber,
    sender,
    addressee,
    description,
    sendDate,
    tag,
  });
  newNote
    .save()
    .then((note) => res.json(note))
    .catch((error) => console.error(error));
}

function getNoteById(req, res) {
  const { noteId } = req.swagger.params;
  Note.findById(noteId.value)
    .then((note) => res.json(note))
    .catch((error) => console.error(error));
}

function getNotes(req, res) {
  Note.find({})
    .then((notes) => res.json(notes))
    .catch((error) => console.error(error));
}

function updateNoteById(req, res) {
  const { noteId } = req.swagger.params;
  Note.findByIdAndUpdate(noteId.value, req.body, {
    new: true,
  })
    .then((note) => res.json(note))
    .catch((error) => console.error(error));
}

function deleteNoteById(req, res) {
  const { noteId } = req.swagger.params;
  Note.findByIdAndDelete(noteId.value)
    .then((note) => res.json(note))
    .catch((error) => console.error(error));
}

module.exports = {
  createNote,
  getNoteById,
  getNotes,
  updateNoteById,
  deleteNoteById,
};
