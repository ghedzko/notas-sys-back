const express = require("express");
const app = express();
const path = require("path");

// Settings
app.set("port",process.env.PORT || 5000);


// Middlewares
app.use(express.urlencoded({extended: false}));


//Routes
app.use(require("./routes/index"));



//404 handler
app.use((req,res,next)=>{
res.status(404).send("404 Not Found");
});

module.exports = app;
