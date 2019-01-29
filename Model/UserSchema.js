const mongooose = require('mongoose');
const Schema = mongooose.Schema;

let UserSchema =  new Schema({

    username : String,
    email : String,
    password: String
    
});

module.exports = mongooose.model('User',UserSchema);