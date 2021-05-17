"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
// export const ROLES = ["user", "admin", "moderator"];
const roleSchema = new mongoose_1.Schema({
    name: String,
}, {
    versionKey: false,
});
exports.default = mongoose_1.model("Role", roleSchema);
