const Movie = require('../models/Movie');
const {StatusCodes} = require('http-status-codes');

// Add a new movie
exports.addMovie = async (req, res) => {
    const { title, description, releaseDate, genre } = req.body;
    const movie = new Movie({ title, description, releaseDate, genre });
    await movie.save();
    res.status(201).send('Movie added');
};

// Get all movies
exports.getAllMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
};

// Get a single movie
exports.getSingleMovie = async (req, res) => {
    const {id: movieId} = req.params;
    const movie = await Movie.findOne({ _id: movieId })

    res.status(StatusCodes.OK).json({ movie })
}

// Fetch movies based on status (Currently Running, Coming Soon)
exports.getMoviesByStatus = async (req, res) => {
    const { status } = req.params;
    const movies = await Movie.find({ status });
    res.json(movies);
};

// Search for a movie by title
exports.searchMovieByTitle = async (req, res) => {
    const { title } = req.query;
    const movies = await Movie.find({ title: { $regex: title, $options: 'i' } });
    res.json(movies);
};
