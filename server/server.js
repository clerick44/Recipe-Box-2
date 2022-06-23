require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const userRoutes = require("./routes/users.js");
const recipeRoutes = require("./routes/recipes.js");

//express app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/recipes", recipeRoutes);
//conect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to db and Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
