"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const contactoSchema = new mongoose_1.Schema({
    nombre: String,
    oficina: String,
    correo: String,
    telefono: String
});
exports.default = mongoose_1.model("Contacto", contactoSchema);
