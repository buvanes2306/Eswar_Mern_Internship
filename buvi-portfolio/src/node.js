const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const filePath = './contact.json';

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send('All fields are required.');
  }

  const newEntry = { name, email, message, date: new Date().toISOString() };

  fs.readFile(filePath, (err, data) => {
    if (err) return res.status(500).send('Server error.');

    const contacts = JSON.parse(data || '[]');
    contacts.push(newEntry);

    fs.writeFile(filePath, JSON.stringify(contacts, null, 2), (writeErr) => {
      if (writeErr) return res.status(500).send('Server error.');
      res.status(200).send('Message saved.');
    });
  });
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
