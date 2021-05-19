const { Router } = require("express");
const router = Router();
const userCtrl = require("../controllers/user.controller");
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
 *          type: array
 *          description: the roles of the user
 */

/**
 * @swagger
 * tags:
 *  name: Users
 *  description: Users endpoint
 */

/**
 * @swagger
 * /users:
 *  get:
 *    summary: Returns a list of users
 *    tags: [Users]
 *    responses:
 *      200:
 *        description: the list of users
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/User'
 */

router.get("/", userCtrl.getUsers);

router.get("/api/users/:userId", userCtrl.getUserById);

router.post("/api/users", userCtrl.createUser);

router.put("/api/users/:userId", userCtrl.updateUserById);

router.delete("/api/users/:userId", userCtrl.deleteUserById);

export default router;
