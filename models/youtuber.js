'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var youtuberSchema = new Schema({
    name: String,
    email: String,
    countries: [{team: String, place: Number},{team: String, place: Number},{team: String, place: Number}]
});

module.exports = mongoose.model("YouTuber", youtuberSchema);