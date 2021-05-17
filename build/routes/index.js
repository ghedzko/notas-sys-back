"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/', (req, res) => {
    res.json({
        message: "bienvenidos al sistema de notas",
        name: "Notas-Sys",
        version: "1.0",
        description: "App para centros educativos",
        author: "Palmiciano - Hedzko"
    });
});
exports.default = router;
