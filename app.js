const bodyParse = require('body-parser');
const express = require('express');
const app = express();
const http= require('http');
const config = require('./config');

const mongoose = require('mongoose');
//const url ='mongodb://localhost:27017/';

mongoose.connect(config.mongo_url);


const PORT = process.env.PORT || 3000;

const notesRouter = require('./routes/NotesRouter');
const userRouter = require('./routes/UserRouter');

app.use(bodyParse.json());

app.use('/notes',notesRouter);
app.use('/users',userRouter);

app.listen(PORT , () => {
    console.log(`listening on ${PORT}`);
});

//to keep heroku awake
setInterval( function() {
    http.get(config.heroku_url);
},600000);