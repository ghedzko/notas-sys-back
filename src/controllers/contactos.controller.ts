const Contacto = require("../models/Contacto");
import { Handler } from "express";

 export const createContacto: Handler = async(req,res) => {
  const { name, destination, email, telephone } = req.body;

  try {
    const newContacto = new Contacto({
      name,
      destination,
      email,
      telephone,
    });
    console.log(newContacto.nombre);
    const contactoSaved = await newContacto.save();

    res.status(201).json(contactoSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};


export const  getContactoById: Handler = async(req, res) => {
  const { contactoId } = req.params;
  const contacto = await Contacto.findById(contactoId);
  res.status(200).json(contacto);
};


export const  getContactos: Handler = async(req, res)=> {
   try{
  const contactos = await Contacto.find({});
  return res.json(contactos);
      }
    catch(error){
      console.log(error)
    }
};


  export const  updateContactoById: Handler = async(req, res) =>{
  const updatedContacto = await Contacto.findByIdAndUpdate(
    req.params.contactoId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).json(updatedContacto);
};


export const deleteContactoById: Handler = async(req, res) => {
  const { contactoId } = req.params;

  await Contacto.findByIdAndDelete(contactoId);

  // code 200 is ok too
  res.status(204).json();
};
// module.exports = {
//     createContacto : createContacto,
//     getContactoById:  getContactoById,
//     getContactos:getContactos,
//     updateContactoById: updateContactoById,
//     deleteContactoById: deleteContactoById
// };

