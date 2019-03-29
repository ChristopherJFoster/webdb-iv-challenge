const db = require('../dbConfig');

const getRecipes = () => {
  return db('recipes')
    .join('dishes', 'dishes.id', 'recipes.dishes_id')
    .select('recipes.id', 'dishes.name as dish', 'recipes.name as recipe');
};

const addRecipe = recipe => {
  return db('recipes').insert(recipe);
};

const getRecipe = async id => {
  return db('recipes')
    .leftJoin('recipes_ings', 'recipes_ings.recipes_id', 'recipes.id')
    .leftJoin('ings', 'recipes_ings.ings_id', 'ings.id')
    .join('dishes', 'dishes.id', 'recipes.dishes_id')
    .select(
      'dishes.name as dish',
      'recipes.name as recipe',
      'ings.name as ing',
      'recipes_ings.quantity as quantity',
      'recipes_ings.unit as unit'
    )
    .where({ 'recipes.id': id });
};

module.exports = {
  getRecipes,
  addRecipe,
  getRecipe
};
