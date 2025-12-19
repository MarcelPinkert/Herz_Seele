const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.PGHOST || "localhost",
    user: process.env.PGUSER || "postgres",
    password: process.env.PGPASSWORD || "password",
    database: process.env.PGDATABASE || "anlaufstellen",
    post: Number(process.env.PGPORT || 5432),
});

module.exports = {
  query: (text, params) => pool.query(text, params),
};