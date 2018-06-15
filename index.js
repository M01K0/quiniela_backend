'use strict'
var config = require('./config/config');
var mongoose = require('mongoose');
var app = require('./app');
var port = config.PORT;  //Puerto que usará el servidor.

mongoose.connect(config.DATABASE_URL)
    .then(()=>{
        console.log("\n\n**** Conection with DB established ****\n");
        
        app.listen(port,()=>{
            console.log("**** Local Server created ****\n")
        });
    })
    .catch(err => console.log(err));