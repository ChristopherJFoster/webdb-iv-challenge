const db = require('../dbConfig');

const getRecipes = () => {
  return db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dishes_id')
    .select('recipes.id', 'dishes.name as dish', 'recipes.name as recipe');
};

const addRecipe = recipe => {
  return db('recipes').insert(recipe);
};

module.exports = {
  getRecipes,
  addRecipe
};
