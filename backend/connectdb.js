const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database'))
.catch(err => console.log('Database connection error', err));
};

module.exports = connectDB;