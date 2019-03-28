const db = require('../dbConfig');

const getDishes = () => {
  return db('dishes');
};

const addDish = async dish => {
  return db('dishes').insert({ dish });
};

const getDish = async id => {
  const [recipes] = await db('recipes').where({ dishes_id: id });
  return {
    dish: db('dish')
      .where({ id })
      .first(),
    recipes
  };
};

module.exports = {
  getDishes,
  addDish,
  getDish
};
