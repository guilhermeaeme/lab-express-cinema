const express = require('express');
const router  = express.Router();

const Movie = require('../models/movie.js');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index');
});

/* GET movies */
router.get('/movies', (req, res, next) => {
  Movie.find()
    .then(movies => {
      console.log(movies)

      res.render("movies", {movies});
    })
    .catch(error => {
      console.log(error)
    })
});

/* GET movie */
router.get('/movie/:id', (req, res, next) => {
  let movieId = req.params.id;
  Movie.findOne({'_id': movieId})
    .then(movie => {
      res.render("movie-detail", { movie })
    })
    .catch(error => {
      console.log(error)
    })
});

module.exports = router;
