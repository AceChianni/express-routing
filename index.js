// index.js

import express from 'express';
import mainRoutes from './routes/index.js';

const app = express();
const port = 3000;

app.use('/', mainRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
