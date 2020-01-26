const config = {
	database: 'postgres',
	host: process.env.DATABASE_HOST, // Docker database service name
	password: process.env.DATABASE_PASSWORD,
	port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
}

module.exports = { config }
