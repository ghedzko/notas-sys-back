import mongoose from "mongoose";
require('dotenv').config()

mongoose
    .connect("mongodb://localhost/notas-sys",{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false 
    }
        )
    .then((db)=>console.log('DB is connected'))
    .catch((err) => console.log(err));