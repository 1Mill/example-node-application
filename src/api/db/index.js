const { Pool } = require('pg')
const { config } = require('./config')
const { migrate } = require('./migrate')

let db = new Pool(config)
db.migrate = migrate

module.exports = { db }
