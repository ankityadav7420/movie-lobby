const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true 
  },
  genre: { 
    type: String,
    required: true
  },
  rating: { 
    type: Number, 
    required: true, 
    min: 0,
    max: 10 
  },
  streamingLink: { 
    type: String, 
    required: true 
  },
});

module.exports = mongoose.model('Movie', MovieSchema);
