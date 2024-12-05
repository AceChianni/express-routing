// index.js

import express from 'express';

const app = express();
const port = 3000;

// Basic route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/about', (req, res) => {
    res.send('About Us');
});

app.get('/user/:id', (req, res) => {
    res.send(`User ID: ${req.params.id}`);
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
