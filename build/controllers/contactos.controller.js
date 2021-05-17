"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteContactoById = exports.updateContactoById = exports.getContactos = exports.getContactoById = exports.createContacto = void 0;
const Contacto = require("../models/Contacto");
const createContacto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, destination, email, telephone } = req.body;
    try {
        const newContacto = new Contacto({
            name,
            destination,
            email,
            telephone,
        });
        console.log(newContacto.nombre);
        const contactoSaved = yield newContacto.save();
        res.status(201).json(contactoSaved);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.createContacto = createContacto;
const getContactoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { contactoId } = req.params;
    const contacto = yield Contacto.findById(contactoId);
    res.status(200).json(contacto);
});
exports.getContactoById = getContactoById;
const getContactos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const contactos = yield Contacto.find({});
        return res.json(contactos);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getContactos = getContactos;
const updateContactoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedContacto = yield Contacto.findByIdAndUpdate(req.params.contactoId, req.body, {
        new: true,
    });
    res.status(204).json(updatedContacto);
});
exports.updateContactoById = updateContactoById;
const deleteContactoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { contactoId } = req.params;
    yield Contacto.findByIdAndDelete(contactoId);
    // code 200 is ok too
    res.status(204).json();
});
exports.deleteContactoById = deleteContactoById;
// module.exports = {
//     createContacto : createContacto,
//     getContactoById:  getContactoById,
//     getContactos:getContactos,
//     updateContactoById: updateContactoById,
//     deleteContactoById: deleteContactoById
// };
