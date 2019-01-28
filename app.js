const bodyParse = require('body-parser');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
//const url ='mongodb://localhost:27017/';
const url='mongodb://test1:password1@ds119993.mlab.com:19993/notes';

mongoose.connect(url);


const PORT = process.env.PORT || 3000;

const notesRouter = require('./routes/NotesRouter');

app.use(bodyParse.json());

app.use('/notes',notesRouter);

app.listen(PORT , () => {
    console.log(`listening on ${PORT}`);
});