const { Pool } = require('pg')
const { config } = './config'

const pool = new Pool(config)
module.exports = { config, db: pool }
