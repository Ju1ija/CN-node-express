const express = require("express");

const app = express();

const port = 5000;

app.use("/home", express.static("public"));
app.use("/about", express.static("public/about.html"));
app.use("/journal", express.static("public/journal.html"));
app.use("/places", express.static("public/places.html"));
app.use("/shop", express.static("public/shop.html"));
app.use("/contact", express.static("public/contact.html"));

app.listen(port, () => console.log("Listening on port 5000"));