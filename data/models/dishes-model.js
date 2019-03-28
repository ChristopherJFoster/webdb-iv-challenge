const db = require('../dbConfig');

const getDishes = () => {
  return db('dishes');
};

const addDish = dish => {
  return db('dishes').insert({ name: dish });
};

const getDish = id => {
  return db('dishes')
    .leftJoin('recipes', 'dishes.id', 'recipes.dishes_id')
    .select('dishes.id', 'dishes.name as dish', 'recipes.name as recipe')
    .where({ 'dishes.id': id });
};

module.exports = {
  getDishes,
  addDish,
  getDish
};
