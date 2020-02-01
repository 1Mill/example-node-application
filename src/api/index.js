const { db } = require('./db');

db.migrate()

db.query('SELECT * FROM todos')
	.then(res => console.log(res.rows))
	.catch(err => console.error(err))

// const statement = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
// const values = ['myValue', 'myValue@html.erb']
// db.query(statement, values);
