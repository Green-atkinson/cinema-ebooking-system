const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    title: String,
    description: String,
    releaseDate: Date,
    genre: String,
    trailerLink: String, // Link to external trailers (YouTube, etc.)
    status: { type: String, enum: ['Currently Running', 'Coming Soon'] }, // New field
});

module.exports = mongoose.model('Movie', movieSchema);
