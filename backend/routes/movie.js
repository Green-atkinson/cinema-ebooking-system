const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

router.post('/', movieController.addMovie); // Add movie
router.get('/', movieController.getAllMovies); // Get movies

// Get movies by status (Currently Running, Coming Soon)
router.get('/status/:status', movieController.getMoviesByStatus);

// Search movie by title
router.get('/search', movieController.searchMovieByTitle);

module.exports = router;