"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { Router } = require("express");
const router = Router();
const roleCtrl = require('../controllers/role.controller');
//Busco todos los roles
router.get('/api/roles', roleCtrl.getRoles);
//Busco Rol por Id
router.get('/api/roles/:roleId', roleCtrl.getRoleById);
//Creo Rol
router.post('/api/roles', roleCtrl.createRole);
// Actualizo Rol por Id
router.put('/api/roles/:roleId', roleCtrl.updateRoleById);
// Elimino Rol por Id
router.delete('/api/roles/:roleId', roleCtrl.deleteRoleById);
exports.default = router;
