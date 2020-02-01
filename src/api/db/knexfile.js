const { config } = require('.')

const MIGRATION_DIRECTORY_RELATIVE_PATH = '/migrations';
const MIGRATION_TABLE_NAME = 'knex_migrations';

const defaults = {
	client: 'postgresql',
	connection: config,
	migrations: MIGRATION_TABLE_NAME,
	pool: { min: 2, max: 10 },
}

module.exports = {
	migrations: {
		directory: [MIGRATION_DIRECTORY_RELATIVE_PATH],
	},

	development: defaults,
	production: defaults,
	staging: defaults,
}
