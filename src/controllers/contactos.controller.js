const Contacto =require("../models/Contacto");

  async function createContacto(req, res) {
  const { nombre, oficina, correo, telefono } = req.body;

  try {
    const newContacto = new Contacto({
      nombre,
      oficina,
      correo,
      telefono,
    });
    console.log(newContacto.nombre);
    const contactoSaved = await newContacto.save();

    res.status(201).json(contactoSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};


 async function  getContactoById(req, res) {
  const { contactoId } = req.params;
  const contacto = await Contacto.findById(contactoId);
  res.status(200).json(contacto);
};


 async function getContactos(req, res) {
   try{
  const contactos = await Contacto.find({});
  return res.json(contactos);
      }
    catch(error){
      console.log(error)
    }
};


  async function updateContactoById(req, res) {
  const updatedContacto = await Contacto.findByIdAndUpdate(
    req.params.contactoId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedContacto);
};


async function deleteContactoById(req, res)  {
  const { contactoId } = req.params;

  await Contacto.findByIdAndDelete(contactoId);

  // code 200 is ok too
  res.status(204).json();
};
module.exports = {
    createContacto : createContacto,
    getContactoById:  getContactoById,
    getContactos:getContactos,
    updateContactoById: updateContactoById,
    deleteContactoById: deleteContactoById
};

