const express = require("express");
const Recipe = require("../models/recipeModel");

const router = express.Router();

// GET all recipes
router.get("/", async (req, res) => {
  // const { title, ingredients, steps } = req.body;
  res.json({ mssg: "GET all recipe" });
  // try {
  //   const workout = await Workout.create({ title, ingredients, steps });
  //   res.status(200).json(workout)
  // } catch (error) {
  //   res.status(400).json({error: error.message})
  // }
});

// GET single recipe

// POST new recipe
router.post("/", async (req, res) => {
  const { title, ingredients, steps } = req.body;

  try {
    const recipe = await Recipe.create({ title, ingredients, steps });
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

//DELETE recipe

//UPDATE recipe

module.exports = router;
