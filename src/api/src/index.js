const { db } = require('./db')
const { server } = require('./server')

const main = () => {
	server.get('/', (req, res) => {
		res.send('Hello world!')
	})
	server.listen(8080)

	db.query('SELECT * FROM todos')
		.then(res => console.log(res.rows))
		.catch(err => console.error(err))

	// const statement = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
	// const values = ['myValue', 'myValue@html.erb']
	// db.query(statement, values);
}

db.migrate()
	.then(() => main())
	.catch(err => console.error(err))
