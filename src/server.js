const app = require('./app');
const port =3000;

// Start the server and log which port it is running on
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});