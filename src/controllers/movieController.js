const Movie = require("../models/Movie");

const getMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch movies" });
  }
};

const searchMovies = async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await Movie.find({
      $or: [
        { title: { $regex: q, $options: "i" } },
        { genre: { $regex: q, $options: "i" } },
      ],
    });
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).json({ error: "Failed to search movies" });
  }
};

const addMovie = async (req, res) => {
  try {
    const { title, genre, rating, streamingLink } = req.body;
    const newMovie = new Movie({ title, genre, rating, streamingLink });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ error: "Failed to add movie" });
  }
};

const updateMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const updates = req.body;
    const updatedMovie = await Movie.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!updatedMovie)
      return res.status(404).json({ error: "Movie not found" });
    res.status(200).json(updatedMovie);
  } catch (err) {
    res.status(500).json({ error: "Failed to update movie" });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedMovie = await Movie.findByIdAndDelete(id);
    if (!deletedMovie)
      return res.status(404).json({ error: "Movie not found" });
    res.status(200).json({ message: "Movie deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete movie" });
  }
};

module.exports = {
  getMovies,
  searchMovies,
  addMovie,
  updateMovie,
  deleteMovie,
};
