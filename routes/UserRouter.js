const express = require('express');
const router = express.Router();

const UserController = require('../controllers/UserController');

//login
router.post('/login',UserController.login);

//signup
router.post('/signup',UserController.signup);

//logout


//to get all users 
//this is a testing feature not to be included in real app
router.get('/',UserController.getUsers);

module.exports = router;