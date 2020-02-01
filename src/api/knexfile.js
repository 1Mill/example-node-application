const { config } = require('./db/config')
const { constants } = require('./db/lib/constants')

const defaults = {
	client: 'postgresql',
	connection: config,
	migrations: {
		directory: [ constants.MIGRATION_DIRECTORY_RELATIVE_PATH ],
		tableName: constants.MIGRATION_TABLE_NAME,
	},
	pool: { min: 2, max: 10 },
}

module.exports = { ...defaults }





