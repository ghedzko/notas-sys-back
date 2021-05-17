const{ Router} =require("express");
const router = Router();
const userCtrl = require('../controllers/user.controller');
/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of user
 *        username:
 *          type: string
 *          description: the username of the user
 *         password:
 *          type: string
 *          description: the password of the user
 *        email:
 *          type: string
 *          description: the email of the user
 *        roles:
 *          type: [string]
 *          description: the roles of the user
 *      required:
 *        - username
 *        - password
 *      example:
 *        id: gQBOyGbxcQy6tEp0aZ78X
 *        name: My first Task
 *        description: I have to do Something
 *    TaskNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found task
 *      example:
 *        msg: Task was not found
 *
 *  parameters:
 *    taskId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
 */
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