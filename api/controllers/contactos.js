const Contacto = require("../models/Contacto")

async function createContacto(req, res) {
    const { nombre, oficina, correo, telefono } = req.body

    try {
        const newContacto = new Contacto({
            nombre,
            oficina,
            correo,
            telefono,
        })
        console.log(newContacto.nombre)
        const contactoSaved = await newContacto.save()

        res.status(201).json(contactoSaved)
    } catch (error) {
        console.log(error)
        return res.status(500).json(error)
    }
}

function getContactoById(req, res) {
    // const { contactoId } = req.params
    Contacto.findById(0)
        .then((contacto) => res.json(contacto))
        .catch((error) => console.error({ error }))
    // res.status(200).json(contacto)
}

const getContactos = (req, res) => {
    Contacto.find({})
        .then((contacts) => res.json(contacts))
        .catch((error) => console.error({ error }))
}

async function updateContactoById(req, res) {
    const updatedContacto = await Contacto.findByIdAndUpdate(
        req.params.contactoId,
        req.body,
        {
            new: true,
        }
    )
    res.status(204).json(updatedContacto)
}

async function deleteContactoById(req, res) {
    const { contactoId } = req.params

    await Contacto.findByIdAndDelete(contactoId)

    // code 200 is ok too
    res.status(204).json()
}

module.exports = {
    // createContacto,
    getContactoById,
    getContactos,
    // updateContactoById,
    // deleteContactoById,
}
