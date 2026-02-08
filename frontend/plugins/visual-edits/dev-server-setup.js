// Dev Server Setup

const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // Removed specific CORS origin validation

// Other configurations...

// Replace git commit email
const gitCommitEmail = 'support@localhost';

// Functionality to handle requests...

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});