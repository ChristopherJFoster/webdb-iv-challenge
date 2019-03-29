const router = require('express').Router();

const Recipes = require('../models/recipes-model');

router.get('/', async (req, res) => {
  try {
    const recipes = await Recipes.getRecipes();
    res.status(200).json(recipes);
  } catch (error) {
    res.status(500).json({
      error: `There was an error while retrieving the recipes data. ${err}`
    });
  }
});

router.post('/', async (req, res) => {
  const { dishes_id, name } = req.body;
  if (!dishes_id || !name) {
    res.status(400).json({
      error: 'Please provide a dish_id and a recipe name.'
    });
  } else if (name.length > 128) {
    res.status(400).json({
      error: 'The recipe name may not exceed 128 characters.'
    });
  } else {
    try {
      const addedRecipe = await Recipes.addRecipe(req.body);
      res.status(201).json(addedRecipe);
    } catch (err) {
      res.status(500).json({
        error: `There was an error while adding the recipe data. ${err}`
      });
    }
  }
});

// router.get('/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const dishRecipes = await Recipes.getDish(id);
//     if (dishRecipes.length > 0) {
//       res.status(200).json(dishRecipes);
//     } else {
//       res.status(404).json({
//         error: 'There is no dish with the specified ID.'
//       });
//     }
//   } catch (err) {
//     res.status(500).json({
//       error: `There was an error while retrieving the dish and recipes data. ${err}`
//     });
//   }
// });

module.exports = router;
