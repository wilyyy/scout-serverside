// schema and schema model defined hereconst express = require('express');
const mongoose = require("mongoose");
const { Schema } = mongoose;

const AnimesSchema = new Schema({
   uid: Number,
   title: String,
   synopsis: String,
   genre: Array,
   aired: String,
   episodes: Number,
   members: Number,
   popularity: Number,
   ranked: Number,
   score: String,
   img_url: String,
});

const Animes = mongoose.model("Animes", AnimesSchema);

module.exports = Animes;
