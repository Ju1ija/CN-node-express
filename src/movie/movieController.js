const Movie = require("./movieModel");

exports.addMovie = async (req, res) => {
  try {
    const userId = req.get("user-id");
    if (!userId) {
      res.status(400).send({ message: "Missing User ID" });
    } else {
      const newMovie = new Movie({
        ...req.body,
        createdBy: userId
      });
      await newMovie.save();
      res.status(200).send({ message: `Successfully added ${newMovie.title} (${newMovie.release})`, newMovie });
    }
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
    await Movie.findByIdAndUpdate(req.params.movieId, req.body);
    const movie = await Movie.findById(req.params.movieId);
    res.status(200).send({ message: `Successfully updated ${movie.title} (${movie.release}).` });
  } catch (error) {
    console.log(error);
  }
}

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.movieId);
    await Movie.deleteOne({ _id: req.params.movieId });
    res.status(200).send({ message: `Successfully deleted ${movie.title} (${movie.release}).` });
  } catch (error) {
    console.log(error);
  }
}