// routes/index.js

import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello Wrld!');
});

router.get('/about', (req, res) => {
    res.send('About Us');
});

// Route to handle /user/:id
router.get('/user/:id', (req, res) => {
    const userId = req.params.id; 
    res.send(`User ID: ${userId}`);
});
export default router;
