'use strict'

var jwt = require('jwt-simple');
var  moment = require('moment');
var secret = 'clave_secreta'; //This secret word may change. With this secret keyword you will generate the token.

exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization){
        return res.status(403).send({message:'Request doesn´t have an authentication header.'});
    }
    var token = req.headers.authorization.replace(/['"]+/g,'');

    try{
        var payload = jwt.decode(token, secret);
        if(payload.exp <= moment().unix()){
            return res.status(401).send({
                message: 'Token has expired.'
            });
        }
    }catch(ex){
        return res.status(404).send({
            message: 'Not valid token.'
        });
    }

    req.user = payload;
    next();
}