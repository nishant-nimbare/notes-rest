const express = require('express');
const router = express.Router();

const NoteController = require('../controllers/NoteController');


//return all notes
router.get('/',NoteController.getAllNotes);


//return specific note
router.get('/:id',NoteController.getNote);


//create new note
router.post('/', NoteController.createNote);


//update a note
router.put('/:id',NoteController.updateNote);


//delete a note
router.delete('/:id',NoteController.deleteNote);

module.exports = router;