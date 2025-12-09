// db.js の内容
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }, 
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 20000,
});

pool.on('error', (err) => {
  console.error('Unexpected PG client error', err);
});

module.exports = {
  query: (text, params) => pool.query(text, params),
  pool
};