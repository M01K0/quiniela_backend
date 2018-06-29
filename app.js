'use strict'

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();


app.use(cors())

//cargar rutas
var teamRoutes    = require('./routes/team');
var youTubeRoutes = require('./routes/youtuber');

//middleware de body-parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Configurar headers y cors
/*app.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Allow-Headers','Authorization, X-API-KEY, Origin, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Allow-Methods','GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow','GET, POST, OPTIONS, PUT, DELETE');
    next();
});*/

//Rutas Base
app.use('/api',teamRoutes);
app.use('/api',youTubeRoutes);

module.exports = app;