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
exports.deleteNotaById = exports.updateNotaById = exports.getNotas = exports.getNotaById = exports.createNota = void 0;
const Nota = require('../models/Nota');
const createNota = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { number, sender, addressee, description, send_date, tag } = req.body;
    try {
        const newNota = new Nota({
            number,
            sender,
            addressee,
            description,
            send_date,
            tag
        });
        console.log(newNota);
        const notaSaved = yield newNota.save();
        res.status(201).json(notaSaved);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json(err);
    }
});
exports.createNota = createNota;
const getNotaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { notaId } = req.params;
    const nota = yield Nota.findById(notaId);
    res.status(200).json(nota);
});
exports.getNotaById = getNotaById;
const getNotas = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const notas = yield Nota.find({});
        console.log(notas);
        return res.json(notas);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getNotas = getNotas;
const updateNotaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedNota = yield Nota.findByIdAndUpdate(req.params.notaId, req.body, {
        new: true,
    });
    res.status(204).json(updatedNota);
});
exports.updateNotaById = updateNotaById;
const deleteNotaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { notaId } = req.params;
    yield Nota.findByIdAndDelete(notaId);
    res.status(204).json();
});
exports.deleteNotaById = deleteNotaById;
// module.exports = {
//     createNota : createNota,
//     getNotaById : getNotaById,
//     getNotas : getNotas ,
//     updateNotaById : updateNotaById,
//     deleteNotaById : deleteNotaById
// };
