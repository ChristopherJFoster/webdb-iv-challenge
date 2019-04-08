exports.seed = function(knex) {
  return knex('ings').insert([
    { name: 'cereal' },
    { name: 'unsweetened soy milk' },
    { name: 'chocolate soy milk' },
    { name: 'bread' },
    { name: 'peanut butter' },
    { name: 'jelly' },
    { name: 'mayonnaise' },
    { name: 'mustard' },
    { name: 'fake ham' },
    { name: 'cheese' },
    { name: 'arugula' },
    { name: 'mango chunks' },
    { name: 'banana' }
  ]);
};
