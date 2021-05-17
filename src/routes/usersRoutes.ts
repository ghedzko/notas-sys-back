const{ Router} =require("express");
const router = Router();
const userCtrl = require('../controllers/user.controller');

//Busco todos los usuarios
router.get('/api/users', userCtrl.getUsers);

//Busco Usuario por Id
router.get('/api/users/:userId',userCtrl.getUserById);

//Creo Usuario
router.post('/api/users',userCtrl.createUser);

// Actualizo usuario por Id
router.put('/api/users/:userId', userCtrl.updateUserById);

// Elimino usuario por Id
router.delete('/api/users/:userId',userCtrl.deleteUserById);

export default router;