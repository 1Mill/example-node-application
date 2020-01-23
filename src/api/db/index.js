module.exports = {
	database: 'postgres',
	host: 'database', // Docker database service name
	password: process.env.DATABASE_PASSWORD,
	port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
}
