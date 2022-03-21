const mongoose = require("mongoose");
const { Schema } = mongoose;

const YourListSchema = new Schema({
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

const YourList = mongoose.model("YourList", YourListSchema);

module.exports = YourList;
