const { MIGRATION_DIRECTORY_RELATIVE_PATH, MIGRATION_TABLE_NAME } = require('./db/lib/migration')
const { config } = require('./db/config')

const defaults = {
	client: 'postgresql',
	connection: config,
	migrations: {
		directory: [MIGRATION_DIRECTORY_RELATIVE_PATH],
		tableName: MIGRATION_TABLE_NAME,
	},
	pool: { min: 2, max: 10 },
}

module.exports = { ...defaults }





