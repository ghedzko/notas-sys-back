import { Schema, model } from "mongoose";

const contactoSchema = new Schema(
    {
        nombre: String,
        oficina: String,
        correo: String,
        telefono: String
    }
)
export default model("Contacto", contactoSchema);