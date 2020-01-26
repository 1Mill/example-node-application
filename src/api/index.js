const { db } = require('./db');

db.query('SELECT NOW()')
	.then(res => console.log(res))
	.catch(err => console.error(err))
	.finally()
console.log("I did a thing.")

const statement = 'INSERT INTO users(name, email) VALUES($1, $2) RETURNING *'
const values = ['myValue', 'myValue@html.erb']

db.query(text, values);
