const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    await newMovie.save();
    res.status(200).send({ message: "Successfully added movie", newMovie });
  } catch (error) {
    console.log(error);
  }
}

exports.listMovies = async (req, res) => {
  try {
    const list = await Movie.find({});
    const message = list.length === 0 ? "No items found." : `${list.length} items found.`;
    res.status(200).send({ message: message, list });
  } catch (error) {
    console.log(error);
  }
}

exports.updateMovie = async (req, res) => {
  try {
    await Movie.findByIdAndUpdate(req.body._id, req.body);
    const movie = await Movie.findById(req.body._id);
    res.status(200).send({ message: "Successfully updated movie", movie });
  } catch (error) {
    console.log(error);
  }
}

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.body._id);
    await Movie.deleteOne({ _id: req.body._id });
    res.status(200).send({ message: "Successfully deleted movie", movie });
  } catch (error) {
    console.log(error);
  }
}