require("./db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./user/userRoutes");
const movieRouter = require("./movie/movieRoutes");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.use(userRouter);
app.use(movieRouter);
app.listen(port, () => console.log("Listening on port 5000"));