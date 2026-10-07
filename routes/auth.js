const express = require('express');
const { createUser } = require('../controllers/auth');
const router = express.Router();

// router.post('/login', );

router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        await createUser(email, password);
        res.status(201).send("User Created!");
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;