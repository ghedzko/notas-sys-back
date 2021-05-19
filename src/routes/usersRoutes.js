const{ Router} =require("express");
const router = Router();
const userCtrl = require('../controllers/user.controller');
const {verifyToken} = require('../middlewares/authJwt');
//Busco todos los usuarios
router.get('/api/users',[verifyToken], userCtrl.getUsers);

//Busco Usuario por Id
router.get('/api/users/:userId',userCtrl.getUserById);

//Creo Usuario
router.post('/api/users',userCtrl.createUser);

// Actualizo usuario por Id
router.put('/api/users/:userId', userCtrl.updateUserById);

// Elimino usuario por Id
router.delete('/api/users/:userId',userCtrl.deleteUserById);

module.exports = router;