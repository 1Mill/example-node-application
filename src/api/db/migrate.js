const { config } = require('./config')
const { constants } = require('./lib/constants')

const knex = require('knex')({
	client: 'postgresql',
	connection: config,
	migrations: {
		directory: [ constants.MIGRATION_DIRECTORY_RELATIVE_PATH ],
		tableName: constants.MIGRATION_TABLE_NAME,
	},
	pool: { min: 2, max: 10 },
})

module.exports = { migrate: () => { knex.migrate.latest() } }
