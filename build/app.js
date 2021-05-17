"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const express_2 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const notasRoutes_1 = __importDefault(require("./routes/notasRoutes"));
const rolesRoutes_1 = __importDefault(require("./routes/rolesRoutes"));
const contactosRoutes_1 = __importDefault(require("./routes/contactosRoutes"));
const usersRoutes_1 = __importDefault(require("./routes/usersRoutes"));
// Swagger
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swaggerOptions_1 = require("./swaggerOptions");
// Settings
app.set("port", process.env.PORT || 5001);
// Middlewares
app.use(express_2.default());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
const specs = swagger_jsdoc_1.default(swaggerOptions_1.options);
//Routes
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(specs));
app.use("/", index_1.default);
app.use("/api/contactos", contactosRoutes_1.default);
app.use('/api/notas', notasRoutes_1.default);
app.use("/api/roles", rolesRoutes_1.default);
app.use("/api/users", usersRoutes_1.default);
// app.use(require("./routes/index"));
// app.use(require('./routes/notasRoutes'));
// app.use(require('./routes/contactosRoutes'));
// app.use(require('./routes/usersRoutes'));
// app.use(require('./routes/rolesRoutes'));
//404 handler
app.use((req, res, next) => {
    res.status(404).send("404 Not Found");
});
exports.default = app;
