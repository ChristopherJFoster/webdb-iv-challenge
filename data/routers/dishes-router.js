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

module.exports = router;
