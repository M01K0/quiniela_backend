'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 8080;  //Puerto que usará el servidor.

mongoose.connect('mongodb://localhost:27017/worldCupRussia')
    .then(()=>{
        console.log("\n\n**** Conection with DB established ****\n");
        
        app.listen(port,()=>{
            console.log("**** Local Server created ****\n")
        });
    })
    .catch(err => console.log(err));