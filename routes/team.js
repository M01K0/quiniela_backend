'use strict'

var express = require('express');
var TeamController = require('../controllers/team');

var api = express.Router();
//var mdAuth = require('../middlewares/authenticate');

api.get('/equipos', TeamController.getTeams);

module.exports = api;