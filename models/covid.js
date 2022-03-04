const mongoose = require("mongoose");

// Schema
const Schema = mongoose.Schema;
const CovidPostSchema = new Schema({
  jumlah_positif: Number,
  jumlah_sembuh: Number,
  jumlah_meninggal: Number,
  jumlah_dirawatif: Number,
  date: {
    type: String,
    default: Date.now(),
  },
  created: {
    type: Date,
    default: Date.now(),
  },
});

// Model
const CovidPost = mongoose.model("CovidPost", CovidPostSchema);

module.exports = CovidPost;
