const { Pool, Client } = require('pg')
require('dotenv').config();
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: process.env.DB,
  password: process.env.PASS,
  port:  process.env.PORT,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: process.env.DB,
    password: process.env.PASS,
    port:  process.env.PORT,
})
client.connect()
var query = client.query("SELECT * FROM product_demontration");
client.query('SELECT * FROM product_demontration', (err, res) => {
  console.log(  res)
  client.end()
})