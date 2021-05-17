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
exports.deleteUserById = exports.updateUserById = exports.getUsers = exports.getUserById = exports.createUser = void 0;
const User = require("../models/User");
const Role = require("../models/Role");
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, roles } = req.body;
        const rolesFound = yield Role.find({ name: { $in: roles } });
        // creating a new User
        const user = new User({
            username,
            email,
            password,
            roles: rolesFound.map((role) => role._id),
        });
        // encrypting password
        user.password = yield User.encryptPassword(user.password);
        // saving the new user
        const savedUser = yield user.save();
        return res.status(200).json({
            _id: savedUser._id,
            username: savedUser.username,
            email: savedUser.email,
            roles: savedUser.roles,
        });
    }
    catch (error) {
        console.error(error);
    }
});
exports.createUser = createUser;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const user = yield User.findById(userId);
    res.status(200).json(user);
});
exports.getUserById = getUserById;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User.find({});
        return res.json(users);
    }
    catch (error) {
        console.log(error);
    }
});
exports.getUsers = getUsers;
const updateUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUser = yield User.findByIdAndUpdate(req.params.userId, req.body, {
        new: true,
    });
    res.status(204).json(updatedUser);
});
exports.updateUserById = updateUserById;
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.params;
    const deletedUser = yield User.findByIdAndDelete(userId);
    res.status(204).json(deletedUser);
});
exports.deleteUserById = deleteUserById;
module.exports = {
    createUser: exports.createUser,
    getUserById: exports.getUserById,
    getUsers: exports.getUsers,
    updateUserById: exports.updateUserById,
    deleteUserById: exports.deleteUserById
};
