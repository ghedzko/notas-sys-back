const express = require("express");
const app = express();
const path = require("path");
const morgan = require('express');

// Settings
app.set("port",process.env.PORT || 5001);


// Middlewares
app.use(morgan('dev'));
// app.use(express.urlencoded({extended: false}));
app.use(express.json());


//Routes
app.use(require("./routes/index"));
app.use(require('./routes/notasRoutes'));
app.use(require('./routes/contactosRoutes'));
app.use(require('./routes/usersRoutes'));
app.use(require('./routes/rolesRoutes'));
app.use(require("./routes/authRoutes"));


//404 handler
app.use((req,res,next)=>{
res.status(404).send("404 Not Found");
});

module.exports = app;
