const { Pool } = require('pg');

// Set up connection parameters
const pool = new Pool({
  user: 'postgres',
  host: 'localhost', // Replace 'localhost' if necessary
  database: 'postgres', // Replace 'postgres' with your actual database name
  password: '0000',
  port: 5432, // Replace with your PostgreSQL port if different
});

// Example query
pool.query('SELECT * FROM cars', (err, res) => {
  if (err) {
    console.error('Error executing query', err);
  } else {
    console.log('Query result:', res.rows);
  }
});

// Don't forget to release the client after finishing the operations
pool.end();
