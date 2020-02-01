const { db } = require('./db');

db.migrate()

db.query('SELECT NOW()')
	.then(res => console.log(res))
	.catch(err => console.error(err))
	.finally(() => process.exit(0))

console.log("I did a thing.")

// const statement = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
// const values = ['myValue', 'myValue@html.erb']
// db.query(statement, values);
