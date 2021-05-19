const db = require('mongoose');

db
    .connect(process.env.MONGODB_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false 
    }
        )
    .then((db)=>console.log('DB is connected'))
    .catch((err) => console.log(err));