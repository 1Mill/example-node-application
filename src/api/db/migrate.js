const { MIGRATION_DIRECTORY_RELATIVE_PATH, MIGRATION_TABLE_NAME } = require('./lib/migration')
const { config } = require('./config')

const knex = require('knex')({
	client: 'postgresql',
	connection: config,
	migrations: {
		directory: [ MIGRATION_DIRECTORY_RELATIVE_PATH ],
		tableName: MIGRATION_TABLE_NAME,
	},
	pool: { min: 2, max: 10 },
})

module.exports = { migrate: () => { knex.migrate.latest() } }
