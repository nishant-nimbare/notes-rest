const jwt = require('jsonwebtoken');
const config = require('../config');

//this is the middle ware for restricted end points

verifyUser = function (req,res,next){

    let token = req.get('token');

    if(!token) return res.status(403).send('token not provided');

    jwt.verify(token,config.secret,(err,decoded)=>{
    
        if (err) return res.send(err);

        console.log('verified!!')
        req.user_id = decoded.id;

        next();
    });
}

module.exports = verifyUser;