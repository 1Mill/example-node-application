const { Pool } = require('pg')
const { config } = require('./config')
const { migrate } = require('./migrate')

let db = new Pool(config)
db.migrate = async () => { await migrate() }

module.exports = { db }
