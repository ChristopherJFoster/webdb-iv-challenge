exports.seed = function(knex) {
  return knex('recipes').insert([
    {
      dish_id: 1,
      name: 'classic',
      instructions: 'Pour cereal in suitable receptacle. Pour milk over cereal.'
    },
    {
      dish_id: 1,
      name: 'chocolate',
      instructions:
        'Pour cereal in suitable receptacle. Pour chocoloate milk over cereal.'
    },
    {
      dish_id: 2,
      name: 'peanut butter and jelly',
      instructions:
        'Spread peanut butter on one slice of bread. Spread jelly on the other slice of bread. Press two slices of bread together such that the ingredients are on the inside.'
    },
    {
      dish_id: 2,
      name: 'fake ham and real cheese',
      instructions:
        'Spread mayonaise on two slices of bread. Spread mustard on the same two slices of bread. Place three slices of fake ham on the mayonaise/mustard side of one slice of bread. Place one slice of cheese on the mayonaise/mustard side of the other slice of bread. Place a arugula on top of cheese. Press two slices of bread together such that the ingredients are on the inside.'
    },
    {
      dish_id: 3,
      name: 'mango banana',
      instructions:
        'Pour soy milk in blender. Place mango chunks in blender. Peel banana and place in blender. Place top on blender and run until the contents are of the desired consistency.'
    }
  ]);
};
