const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.send('Authentication Routes');
});

// Add more routes as needed...

module.exports = router;
