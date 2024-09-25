const dotenv = require("dotenv");
// load config
dotenv.config();

const connectDB = require("./connectdb");
const Movie = require("./models/Movie");

const jsonMovies = require("./movies.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    await Movie.deleteMany();
    await Movie.create(jsonMovies);
    console.log("Sucesss!!");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(0);
  }
};

start();
