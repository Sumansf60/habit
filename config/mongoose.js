// this is to connect the mongo DB
const mongoose = require('mongoose');

// storing the db on mongo atlas
const DB = "mongodb+srv://saket:8318291085@cluster0.tkql36k.mongodb.net/?retryWrites=true&w=majority";
//mongodb+srv://vikas:<password>@cluster0.niysbli.mongodb.net/?retryWrites=true&w=majority

// mongoose.connect('mongodb://127.0.0.1/habit_tracker');

mongoose.connect(DB).then(()=>{
    console.log('Connection successful!');
}).catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});

module.exports = db;