'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema  = new Schema({
    team: String,
    place: Number
});

module.exports = mongoose.model("Country", countrySchema);