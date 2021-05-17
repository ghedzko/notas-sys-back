"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const notaSchema = new mongoose_1.Schema({
    numero: Number,
    remitente: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Contacto"
    },
    destinatario: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: "Contacto"
    },
    descripcion: String,
    fecha: Date,
    esDeEntrada: Boolean,
    file: [String],
    etiqueta: [String]
}, {
    timestamps: true,
    versionKey: false,
});
exports.default = mongoose_1.model("Nota", notaSchema);
