const { Schema, model } = require("mongoose");

const notaSchema = new Schema({
  numero: Number,
  remitente: {
    type: Schema.Types.ObjectId,
    ref: "Contacto",
  },
  destinatario: {
    type: Schema.Types.ObjectId,
    ref: "Contacto",
  },
  descripcion: String,
  fecha: Date,
  etiqueta: [String],
});
module.exports = model("Nota", notaSchema);
