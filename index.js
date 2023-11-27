const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

app.get("/", welcome);

const allMovies = (req, res) => {
  res.status(200).json(movies);
};

app.get("/api/movies", allMovies);

const movie = (req, res) => {
  const findMovie = movies.find((element) => element.id == req.params.id);
  if (findMovie !== undefined) {
    res.status(200).json(findMovie);
  } else {
    res.status(404).send("Not Found");
  }
};

app.get("/api/movies/:id", movie);

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });
