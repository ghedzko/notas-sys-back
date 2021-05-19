const{Schema, model} = require('mongoose');

const contactoSchema = new Schema(
    {
        nombre: String,
        oficina: String,
        correo: String,
        telefono: String
    }
)
module.exports =model("Contacto", contactoSchema);