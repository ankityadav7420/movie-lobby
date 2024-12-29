const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT, MONGO_URI } = require("./config");
const movieRoutes = require("./src/routes/movieRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api",movieRoutes);

mongoose
  .connect(MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error("Failed to connect to MongoDB", err));

module.exports = app;
