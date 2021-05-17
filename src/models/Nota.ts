import { Schema, model } from "mongoose";

const notaSchema = new Schema(
    {
        numero: Number,
        remitente:{
            type: Schema.Types.ObjectId,
            ref: "Contacto"
        },
        destinatario:{
            type: Schema.Types.ObjectId,
            ref: "Contacto"
        },
        descripcion: String,
        fecha: Date,
        esDeEntrada: Boolean,
        file:[String],
        etiqueta:[String]
    },
    {
      timestamps: true,
      versionKey: false,
    }

);
export default  model("Nota", notaSchema);