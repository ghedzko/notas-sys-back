"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoleById = exports.updateRoleById = exports.getRoles = exports.getRoleById = exports.createRole = void 0;
const Role = require("../models/Role");
const createRole = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name } = req.body;
        // creating a new Role
        const role = new Role({
            name,
        });
        // saving the new user
        const savedRole = yield role.save();
        return res.status(200).json(savedRole);
    }
    catch (error) {
        console.error(error);
    }
});
exports.createRole = createRole;
const getRoleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { roleId } = req.params;
    const role = yield Role.findById(roleId);
    res.status(200).json(role);
});
exports.getRoleById = getRoleById;
const getRoles = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const roles = yield Role.find({});
        // console.log(roles);
        return res.status(200).json(roles);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getRoles = getRoles;
const updateRoleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedRole = yield Role.findByIdAndUpdate(req.params.roleId, req.body, {
        new: true,
    });
    res.status(204).json(updatedRole);
});
exports.updateRoleById = updateRoleById;
const deleteRoleById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { roleId } = req.params;
    const deletedRole = yield Role.findByIdAndDelete(roleId);
    res.status(204).json(deletedRole);
});
exports.deleteRoleById = deleteRoleById;
// module.exports = {
//   createRole:createRole,
//   getRoleById:getRoleById,
//   getRoles:getRoles,
//   updateRoleById:updateRoleById,
//   deleteRoleById:deleteRoleById
// }
