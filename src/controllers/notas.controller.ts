import { Handler } from "express";
const Nota = require('../models/Nota');

export const createNota: Handler = async(req,res) =>{
    const {number, sender, addressee, description, send_date , tag} = req.body;
    try{
        const newNota = new Nota({
            number,
            sender,
            addressee,
            description,
            send_date,
            tag  
        });
        console.log(newNota);
        const notaSaved = await newNota.save();
        res.status(201).json(notaSaved);

    } catch(err){
        console.log(err);
        return res.status(500).json(err);
    }
};
export const  getNotaById: Handler = async(req,res) =>{
    const {notaId} = req.params;
    const nota = await Nota.findById(notaId);
    res.status(200).json(nota);
};


export const getNotas: Handler = async(req,res) =>{
    try{
        const notas = await Nota.find({});
        console.log(notas)
        return res.json(notas);
    }
    catch(error){
        console.log(error)
    }
};
export const updateNotaById: Handler=async(req, res)=>{
    const updatedNota = await Nota.findByIdAndUpdate(
        req.params.notaId,
        req.body,
        {
            new:true,
        }
    );
    res.status(204).json(updatedNota);
};
export const  deleteNotaById: Handler = async(req,res)=>{
    const { notaId} = req.params;
    await Nota.findByIdAndDelete(notaId);
    res.status(204).json()
};

// module.exports = {
//     createNota : createNota,
//     getNotaById : getNotaById,
//     getNotas : getNotas ,
//     updateNotaById : updateNotaById,
//     deleteNotaById : deleteNotaById
// };