exports.seed = function(knex) {
  return knex('dishes').insert([
    { name: 'cereal' },
    { name: 'sandwich' },
    { name: 'smoothie' }
  ]);
};
