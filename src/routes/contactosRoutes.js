const{ Router} =require("express");
const router = Router();
const contactoCtrl = require("../controllers/contactos.controller");
//console.log(contactoCtrl);
//Busco todas los contactos
router.get( '/api/contactos', contactoCtrl.getContactos );
//Busco contacto por Id
//router.get('/api/contactos/:contactoId', contactoCtrl.getContactoById);
//Creo contacto 
router.post('/api/contactos',contactoCtrl.createContacto);
//Actualizo contacto por Id
//router.put('/api/contactos/:contactoId', contactoCtrl.updateContactoById);
//elimino contacto por Id
//router.delete('/api/contactos/:contactoId', contactoCtrl.deleteContactoById);

module.exports = router;