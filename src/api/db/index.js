const { Pool, Client } = require('pg')

const config = {
	database: 'postgres',
	host: 'database', // Docker database service name
	password: process.env.DATABASE_PASSWORD,
	port: process.env.DATABASE_PORT,
	user: process.env.DATABASE_USER,
}

const pool = new Pool(config)
pool.query('SELECT NOW()', (err, res) => {
	console.log(err, res)
	pool.end();
})

const client = new Client(config)
client.connect()
client.query('SELECT NOW()', (err, res) => {
	console.log(err, res)
	client.end()
})
