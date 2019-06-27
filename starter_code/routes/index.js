const express = require("express");
const Movie = require("../models/Movie");
const router = express.Router();


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

router.get("/movies", (req, res, next) => {
  Movie.find().then(moviesFromDb=>{
    res.render("movies",{
      movie: moviesFromDb
    });
  });
});

router.get("/movies/:movieId", (req, res, next) => {
  let movieId = req.params.movieId
  Movie.findById(movieId)
    .then(movieInfo => {
      res.render("movie-detail", { 
        movie: movieInfo });
    })
});

module.exports = router;
