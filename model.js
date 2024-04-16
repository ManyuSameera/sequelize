const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:0000@localhost:5432/postgres');

const Contact = sequelize.define(
  'Contact',
  {
    Name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING, // Assuming mobile number is stored as a string
    },
  },
  {
    timestamps: true,
    underscored: true,
    modelName: 'Contact',
    tableName: 'Contacts', // Explicitly set the table name
  }
);

// Synchronize the database (create tables if they don't exist)
async function syncDatabase() {
  await sequelize.sync();
  console.log('Database synchronized successfully.');
}

syncDatabase(); // Call the function to synchronize the database

module.exports = Contact;
