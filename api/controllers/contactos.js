const Contacto = require("../models/Contacto");

function createContacto(req, res) {
  const { nombre, oficina, correo, telefono } = req.body;
  const newContacto = new Contacto({
    nombre,
    oficina,
    correo,
    telefono,
  });
  newContacto
    .save()
    .then((contacto) => res.status(200).json(contacto))
    .catch((error) => console.error(error));
}

function getContactoById(req, res) {
  const { contactId } = req.swagger.params;

  Contacto.findById(contactId.value)
    .then((contacto) => res.status(200).json(contacto))
    .catch((error) => console.error({ error }));
}

const getContactos = (req, res) => {
  Contacto.find({})
    .then((contacts) => res.json(contacts))
    .catch((error) => console.error({ error }));
};

function updateContactoById(req, res) {
  const { contactId } = req.swagger.params;
  Contacto.findByIdAndUpdate(contactId.value, req.body, {
    new: true,
  })
    .then((contacto) => res.json(contacto))
    .catch((error) => console.error({ error }));
}

function deleteContactoById(req, res) {
  const { contactId } = req.swagger.params;
  Contacto.findByIdAndDelete(contactId.value)
    .then((contacto) => res.json(contacto))
    .catch((error) => console.error({ error }));
}

module.exports = {
  createContacto,
  getContactoById,
  getContactos,
  updateContactoById,
  deleteContactoById,
};
