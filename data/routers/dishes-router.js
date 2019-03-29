const router = require('express').Router();

const Dishes = require('../models/dishes-model');

router.get('/', async (req, res) => {
  try {
    const dishes = await Dishes.getDishes();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(500).json({
      error: `There was an error while retrieving the dishes data. ${err}`
    });
  }
});

router.post('/', async (req, res) => {
  const { name } = req.body;
  if (!name) {
    res.status(400).json({
      error: 'Please provide a dish name.'
    });
  } else {
    try {
      const addedDish = await Dishes.addDish(req.body);
      res.status(201).json(addedDish);
    } catch (err) {
      res.status(500).json({
        error: `There was an error while adding the dish data. ${err}`
      });
    }
  }
});

router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const dishRecipes = await Dishes.getDish(id);
    if (dishRecipes.length > 0) {
      res.status(200).json(dishRecipes);
    } else {
      res.status(404).json({
        error: 'There is no dish with the specified ID.'
      });
    }
  } catch (err) {
    res.status(500).json({
      error: `There was an error while retrieving the dish and recipes data. ${err}`
    });
  }
});

module.exports = router;
