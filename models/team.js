'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var teamSchema  = new Schema({
    country: String,
    number: Number
});

module.exports = mongoose.model("Team", teamSchema);