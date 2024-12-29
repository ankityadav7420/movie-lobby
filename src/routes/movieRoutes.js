const express = require("express");
const { authenticateAdmin } = require("../middlewares/auth");
const {
  getMovies,
  searchMovies,
  addMovie,
  updateMovie,
  deleteMovie,
} = require("../controllers/movieController");

const router = express.Router();

router.get("/movies", getMovies);
router.get("/search", searchMovies);
router.post("/movies", authenticateAdmin, addMovie);
router.put("/movies/:id", authenticateAdmin, updateMovie);
router.delete("/movies/:id", authenticateAdmin, deleteMovie);

module.exports = router;
