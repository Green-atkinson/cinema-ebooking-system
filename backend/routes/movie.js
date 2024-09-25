const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/', movieController.addMovie); // Add movie
router.get('/', movieController.getAllMovies); // Get movies
router.get('/:id', movieController.getSingleMovie); // Get movies

// Get movies by status (Currently Running, Coming Soon)
router.get('/status/:status', movieController.getMoviesByStatus);


module.exports = router;