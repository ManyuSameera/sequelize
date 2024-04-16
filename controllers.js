const express = require('express');
const router = express.Router();
const Contact = require('./model.js');

// Create a new contact
async function createContact(req, res) {
  try {
    const { Name, email, mobile } = req.body; // Assuming the input is sent in the request body

    // Create a new contact instance with the provided input
    const newContact = await Contact.create({ Name, email, mobile });

    res.status(201).json(newContact);
  } catch (error) {
    console.error('Error creating contact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get all contacts
async function getAllContacts(req, res) {
  try {
    const contacts = await Contact.findAll(); // Retrieve all contacts from the database

    res.status(200).json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Get a single contact by ID
async function getContactById(req, res) {
  const contactId = req.params.id;

  try {
    const contact = await Contact.findByPk(contactId); // Find contact by ID

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    res.status(200).json(contact);
  } catch (error) {
    console.error('Error fetching contact by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Update a contact by ID
async function updateContact(req, res) {
  const contactId = req.params.id;
  const { Name, email, mobile } = req.body;

  try {
    const contact = await Contact.findByPk(contactId); // Find contact by ID

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    // Update contact attributes
    contact.Name = Name;
    contact.email = email;
    contact.mobile = mobile;

    await contact.save(); // Save the updated contact to the database

    res.status(200).json(contact);
  } catch (error) {
    console.error('Error updating contact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Delete a contact by ID
async function deleteContact(req, res) {
  const contactId = req.params.id;

  try {
    const contact = await Contact.findByPk(contactId); // Find contact by ID

    if (!contact) {
      return res.status(404).json({ error: 'Contact not found' });
    }

    await contact.destroy(); // Delete the contact from the database

    res.status(200).json({ message: 'Contact deleted successfully' });
  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

// Define API endpoints for CRUD operations
router.post('/contact', createContact); // Create a contact
router.get('/contacts', getAllContacts); // Get all contacts
router.get('/contact/:id', getContactById); // Get a contact by ID
router.put('/contact/:id', updateContact); // Update a contact by ID
router.delete('/contact/:id', deleteContact); // Delete a contact by ID

module.exports = router; // Export the router

