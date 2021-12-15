const { Router } = require("express");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movieController");
const movieRouter = Router();

movieRouter.post("/movies", addMovie);
movieRouter.get("/movies", listMovies);
movieRouter.put("/movies/:movieId", updateMovie);
movieRouter.delete("/movies/:movieId", deleteMovie);

module.exports = movieRouter;