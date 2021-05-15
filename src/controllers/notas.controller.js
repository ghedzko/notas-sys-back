const Nota = require('../models/Nota');

async function createNota(req,res){
    const {numero, remitente, destinatario, descripcion, fecha, etiqueta} = req.body;
    try{
        const newNota = new Nota({
            numero,
            remitente,
            destinatario,
            descripcion,
            fecha,
            etiqueta  
        });
        console.log(newNota);
        const notaSaved = await newNota.save();
        res.status(201).json(notaSaved);

    } catch(err){
        console.log(err);
        return res.status(500).json(error);
    }
};

async function getNotaById(req,res){
    const {notaId} = req.params;
    const nota = await Nota.findById(notaId);
    res.status(200).json(nota);
};


async function getNotas(req,res){
    try{
        const notas = await Nota.find({});
        console.log(notas)
        return res.json(notas);
    }
    catch(error){
        console.log(error)
    }
};

async function updateNotaById(req, res){
    const updatedNota = await Nota.findByIdAndUpdate(
        req.params.notaId,
        req.body,
        {
            new:true,
        }
    );
    res.status(204).json(updatedNota);
};

async function deleteNotaById(req,res){
    const { notaId} = req.params;
    await Nota.findByIdAndDelete(notaId);
    res.status(204).json()
};

module.exports = {
    createNota : createNota,
    getNotaById : getNotaById,
    getNotas : getNotas ,
    updateNotaById : updateNotaById,
    deleteNotaById : deleteNotaById
};