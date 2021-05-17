import express from "express";
const app = express();
import path from "path";
import morgan from 'express';

import indexRoutes from "./routes/index";
import notasRoutes from "./routes/notasRoutes";
import rolesRoutes from "./routes/rolesRoutes";
import contactosRoutes from "./routes/contactosRoutes";
import usersRoutes from "./routes/usersRoutes";

// Swagger
import swaggerUI from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import { options } from "./swaggerOptions";

// Settings
app.set("port",process.env.PORT || 5001);


// Middlewares
app.use(morgan());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const specs = swaggerJsDoc(options);
//Routes
app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/", indexRoutes);
app.use("/api/contactos", contactosRoutes);
app.use('/api/notas', notasRoutes);
app.use("/api/roles", rolesRoutes);
app.use("/api/users", usersRoutes);
// app.use(require("./routes/index"));
// app.use(require('./routes/notasRoutes'));
// app.use(require('./routes/contactosRoutes'));
// app.use(require('./routes/usersRoutes'));
// app.use(require('./routes/rolesRoutes'));


//404 handler
app.use((req,res,next)=>{
res.status(404).send("404 Not Found");
});

export default app;
