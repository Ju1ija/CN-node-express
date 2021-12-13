const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  release: {
    type: Number,
    min: 1888,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 10
  }
});

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;