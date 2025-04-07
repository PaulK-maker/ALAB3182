const express = require('express');
const router = express.Router();
const path = require('path');

// ROUTES 

// Homepage Route
router.get('/', (req, res) => {
  res.render('index', {
    title: 'My Express Page',
    features: ['My Dynamic Content', 'File Downloads', 'User Profiles']
  });
});

// Profile Route with Dynamic Parameter
router.get('/profile/:username', (req, res) => {
  res.render('pages/profile', {
    username: req.params.username, // Extract from URL
    joinDate: '2025-04-06' // Example static data
  });
});

// Handle Form Submission (POST)
router.post('/submit', (req, res) => {
  console.log('Form submitted! (Add body-parser later)');
  res.send('Form received - check server logs');
});

// File Download Route
router.get('/download', (req, res) => {
  const filePath = path.join(__dirname, '../public/images/logo.png');
  res.download(filePath, 'custom-image.png', (err) => {
    if (err) console.error('Download error:', err);
  });
});

module.exports = router;