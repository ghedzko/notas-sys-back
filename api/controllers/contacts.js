const Contact = require("../models/Contact");

function createContact(req, res) {
  const { name, office, email, phone } = req.body;
  const newContact = new Contact({
    name,
    office,
    email,
    phone,
  });
  newContact
    .save()
    .then((contact) => res.status(200).json(contact))
    .catch((error) => console.error(error));
}

function getContactById(req, res) {
  const { contactId } = req.swagger.params;

  Contact.findById(contactId.value)
    .then((contact) => res.status(200).json(contact))
    .catch((error) => console.error({ error }));
}

const getContacts = (req, res) => {
  Contact.find({})
    .then((contacts) => res.json(contacts))
    .catch((error) => console.error({ error }));
};

function updateContactById(req, res) {
  const { contactId } = req.swagger.params;
  Contact.findByIdAndUpdate(contactId.value, req.body, {
    new: true,
  })
    .then((contact) => res.json(contact))
    .catch((error) => console.error({ error }));
}

function deleteContactById(req, res) {
  const { contactId } = req.swagger.params;
  Contact.findByIdAndDelete(contactId.value)
    .then((contact) => res.json(contact))
    .catch((error) => console.error({ error }));
}

module.exports = {
  createContact,
  getContactById,
  getContacts,
  updateContactById,
  deleteContactById,
};
