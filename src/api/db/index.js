const { Pool } = require('pg')
const { config } = './config'

const pool = new Pool(config)
module.exports = { db: pool }
