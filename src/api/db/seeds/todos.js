exports.seed = (knex) => {
	return knex('todos')
		.del() // Delete all existing rows
		.then(() => {
			return knex('todos').insert([
				{
					body: 'body 1',
					completed: true,
				},
				{
					body: 'body 2',
					completed: false,
				},
				{
					body: 'body 3',
					completed: true,
				},
			])
		})
}
