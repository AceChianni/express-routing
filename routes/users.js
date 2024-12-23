// routes/users.js

import { Router } from 'express';
import data from '../data.json' assert { type: 'json' };

const router = Router();

router.get('/hello', (req, res) => {
    res.send('Hello users');
});

router.get('/', (req, res) => {
    res.send('List of all users');
});

router.get('/:id', (req, res) => {
    const userId = req.params.id;
    res.send(`User ID: ${userId}`);
});

export default router;
