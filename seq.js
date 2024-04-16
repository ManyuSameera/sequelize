const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '0000', {
    host: 'localhost',
    dialect: 'postgres',
    port:5432
    /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
  });
  try {
   sequelize.authenticate();
   
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

// Call the async function to connect to the database

