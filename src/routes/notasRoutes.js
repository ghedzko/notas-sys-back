const{ Router} =require("express");
const router = Router();
const notaCtrl = require('../controllers/notas.controller');

//Busco todas las notas
router.get('/api/notas', notaCtrl.getNotas);

//Busco Nota por Id
router.get('/api/notas/:notaId',notaCtrl.getNotaById);

//Creo nota
router.post('/api/notas',notaCtrl.createNota);

// Actualizo nota por Id
router.put('/api/notas/:notaId', notaCtrl.updateNotaById);

// Elimino nota por Id
router.delete('/api/notas/:notaId',notaCtrl.deleteNotaById);

module.exports = router;