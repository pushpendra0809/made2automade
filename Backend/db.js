const mongoose = require('mongoose');

function connectToMongo() {
  mongoose.connect("mongodb://0.0.0.0:27017/inotebook?directConnection=true", 
  { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    // useCreateIndex: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.log('Error connecting to MongoDB:', error);
  });
  }

module.exports = connectToMongo;