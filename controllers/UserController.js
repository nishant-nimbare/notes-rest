const mongooose = require('mongoose');
const jwt = require('jsonwebtoken');
const User = require('../Model/UserSchema');

const config = require('../config');
//create new user 
// '/users/signup'

exports.signup = function(req,res){

    let { username , email, password} = req.body;

    let newUser ={
        username,
        email,
        password
    };

    User.create(newUser,(err,user)=>{

        if (err) return res.send(err);

        jwt.sign({id:user._id},config.secret , (err,token)=>{

            if (err) return res.send(err);

            return res.send(token);
        });
    });
    
}

exports.login = function (req,res){

    let {username , password} = req.body;

    User.findOne({username:username},(err,result)=>{

        if (err) return res.status(404).send(err);

        if(!result) return res.status(404).send('user not found in database');

        //check if password matches
        if (result.password === password){

            jwt.sign({id : result.id},config.secret,(err,token)=>{

                if (err) return res.send(err);

                return res.send(token);
            });
        }
    });
}

//this is a development feature to see all users
// not to be included in real apps

exports.getUsers = function (req,res){

    User.find({}, (err,result)=>{

        if (err) return res.send(err);

        return res.send(result);
    });
}