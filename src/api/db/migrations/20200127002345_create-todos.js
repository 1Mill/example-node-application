exports.up = function(knex) {
	return knex.schema.createTable('todos', (table) => {
		table.increments()
		table.timestamps()

		table.boolean('completed')
		table.text('body')
	});
};

exports.down = function(knex) {
	return knex.schema.dropTable('todos')
};
