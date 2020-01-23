module.exports = {
	database: 'postgres',
	host: 'database', // Docker database service name
	password: process.env.DATABASE_PASSWORD,
	port: '5432',
	user: process.env.DATABASE_USER,
}
