const Nota = require("../models/Nota");

function createNota(req, res) {
  const { numero, remitente, destinatario, descripcion, fecha, etiqueta } =
    req.body;
  const newNota = new Nota({
    numero,
    remitente,
    destinatario,
    descripcion,
    fecha,
    etiqueta,
  });
  newNota
    .save()
    .then((nota) => res.json(nota))
    .catch((error) => console.error(error));
}

function getNotaById(req, res) {
  const { notaId } = req.swagger.params;
  Nota.findById(notaId.value)
    .then((nota) => res.json(nota))
    .catch((error) => console.error(error));
}

function getNotas(req, res) {
  Nota.find({})
    .then((notas) => res.json(notas))
    .catch((error) => console.error(error));
}

function updateNotaById(req, res) {
  const { notaId } = req.swagger.params;
  Nota.findByIdAndUpdate(notaId.value, req.body, {
    new: true,
  })
    .then((nota) => res.json(nota))
    .catch((error) => console.error(error));
}

function deleteNotaById(req, res) {
  const { notaId } = req.swagger.params;
  Nota.findByIdAndDelete(notaId.value)
    .then((nota) => res.json(nota))
    .catch((error) => console.error(error));
}

module.exports = {
  createNota,
  getNotaById,
  getNotas,
  updateNotaById,
  deleteNotaById,
};
