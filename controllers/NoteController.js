const mongoose = require('mongoose');

const Note = require('../Model/NoteSchema');


//return all notes 
// ' /notes'
exports.getAllNotes = function (req,res){

    Note.find({}, (err,result)=>{

        if (err) throw err;

        return res.json(result);
    });

}

//get a specific note 
// '/notes/:id'
exports.getNote = function (req,res){

    console.log(req.params.id);

    Note.findById(req.params.id, (err,result)=>{
        if (err) return res.send(err);

        return res.send(result);
    })
}

//create note
// '/notes'

exports.createNote = function (req,res){

    let  newNote = new Note({

        title : req.body.title,
        description : req.body.description,
        category : req.body.category

    });


    newNote.save((err)=>{
        if (err) return res.send(err);

        return res.json({newNote, id : req.user_id});
    });

}


//update note
// '/notes/:id'
exports.updateNote = function(req,res){

    let {title,description,category} = req.body;

    let newValues = {
        title : title,
        description : description,
        category : category
    }
    Note.updateOne({_id : req.params.id} , newValues,  (err,result)=>{

        if (err) return res.send(err);

        return res.send(result);
    });
}


//delete note
// '/notes/:id'

exports.deleteNote = function (req,res){

    Note.deleteOne({_id : req.params.id} , (err)=>{
        if (err) return res.send(err);

        return res.send('deleted!!!');
    });
}