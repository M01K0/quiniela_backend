'use strict'

var express = require('express');
var YouTuberController = require('../controllers/youtuber');

var api = express.Router();
//var mdAuth = require('../middlewares/authenticate');

api.post('/user', YouTuberController.addUser);
api.get('/users',YouTuberController.getUsers);
api.get('/user/:id',YouTuberController.getUserById);
api.put('/user/:id',YouTuberController.updateUser);
module.exports = api;