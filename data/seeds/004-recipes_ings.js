exports.seed = function(knex) {
  return knex('recipes_ings').insert([
    { recipes_id: 1, ings_id: 1, quantity: 2, unit: 'cups' },
    { recipes_id: 1, ings_id: 2, quantity: 0.75, unit: 'cups' },
    { recipes_id: 2, ings_id: 1, quantity: 2, unit: 'cups' },
    { recipes_id: 2, ings_id: 3, quantity: 0.75, unit: 'cups' },
    { recipes_id: 3, ings_id: 4, quantity: 2, unit: 'slices' },
    { recipes_id: 3, ings_id: 5, quantity: 2, unit: 'tbl.' },
    { recipes_id: 3, ings_id: 6, quantity: 1, unit: 'tbl.' },
    { recipes_id: 4, ings_id: 4, quantity: 2, unit: 'slices' },
    { recipes_id: 4, ings_id: 7, quantity: 2, unit: 'tbl.' },
    { recipes_id: 4, ings_id: 8, quantity: 2, unit: 'tsp.' },
    { recipes_id: 4, ings_id: 9, quantity: 3, unit: 'slices' },
    { recipes_id: 4, ings_id: 10, quantity: 1, unit: 'slice' },
    { recipes_id: 4, ings_id: 11, quantity: 1, unit: 'handful' },
    { recipes_id: 5, ings_id: 2, quantity: 0.5, unit: 'cups' },
    { recipes_id: 5, ings_id: 12, quantity: 1, unit: 'cup' },
    { recipes_id: 5, ings_id: 13, quantity: 1, unit: '' }
  ]);
};
