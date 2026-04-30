const express = require('express');
const app = express();

//Return a welcome message at the root URL

app.get('/', (req, res) => {
    res.send('Welcome to the CI/CD Demo API');
});

//Return a JSON health check response
app.get('/health', (req, res) => {
    res.json({status: 'ok'});
});

// Export the app so tests can import it without starting a server
module.exports = app;