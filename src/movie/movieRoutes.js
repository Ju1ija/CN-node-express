const { Router } = require("express");
const { addMovie, listMovies, updateMovie, deleteMovie } = require("./movieController");
const movieRouter = Router();

movieRouter.post("/movie", addMovie);
movieRouter.get("/movie", listMovies);
movieRouter.put("/movie", updateMovie);
movieRouter.delete("/movie", deleteMovie);

module.exports = movieRouter;