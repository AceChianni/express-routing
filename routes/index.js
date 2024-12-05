// routes/index.js

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello from the main router!');
});

router.get('/about', (req, res) => {
    res.send('About Us');
});

export default router;
