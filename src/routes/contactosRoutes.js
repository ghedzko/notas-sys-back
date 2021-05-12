const{ Router} =require("express");
const router = Router();
var contactoCtrl = require("../controllers/contactos.controller");
//Busco todas las notas
router.get('/api/contactos', contactoCtrl.getContactos() );
//Busco Nota por Id
router.get('/api/contactos/:contactoId', contactoCtrl.getContactoById());

router.post('/api/contactos',contactoCtrl.createContacto());

router.put('/api/contactos/:contactoId', contactoCtrl.updateContactoById());

router.delete('/api/contactos/:contactoId', contactoCtrl.deleteContactoById());

module.exports = router;