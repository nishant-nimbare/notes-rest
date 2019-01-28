const mongoose = require('mongoose');

var Schema = mongoose.Schema;

let NoteSchema = new Schema({

    title : { type : String },
    description : { type : String },
    category : { type : String },
    
});

module.exports = mongoose.model('Note',NoteSchema);