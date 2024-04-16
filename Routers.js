const express = require('express');
const app = express();
app.use(express.json());
// Other app configurations and middleware setup

// Import the router from controllers.js
const contactRoutes = require('./controllers.js');

// Define your API routes using the imported router
app.use('/api', contactRoutes);

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app; // Export the Express app
