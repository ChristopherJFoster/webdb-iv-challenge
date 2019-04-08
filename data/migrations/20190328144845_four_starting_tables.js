exports.up = function(knex) {
  return knex.schema
    .createTable('dishes', tbl => {
      tbl.increments();
      tbl
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('recipes', tbl => {
      tbl.increments();
      tbl
        .integer('dishes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        // If someone deletes a dish, I think the user would expect all recipes for that dish to be deleted (could also be protected with a client-side warning).
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.string('name', 128).notNullable();
      tbl.string('instructions');
    })
    .createTable('ings', tbl => {
      tbl.increments();
      tbl.string('name', 128).notNullable();
    })
    .createTable('recipes_ings', tbl => {
      tbl.increments();
      tbl
        .integer('recipes_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        // If someone deletes a recipe, we would want any associated records in this junction table to be deleted.
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('ings_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ings')
        // If someone attempts to delete an ingredient that is referenced in existing recipes, we would not want to allow it.
        .onDelete('RESTRICT')
        .onUpdate('CASCADE');
      tbl.float('quantity', 6, 3).notNullable();
      tbl.string('unit', 128).notNullable();
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes_ings')
    .dropTableIfExists('ings')
    .dropTableIfExists('recipes')
    .dropTableIfExists('dishes');
};
