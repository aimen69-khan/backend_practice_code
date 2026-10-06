const express = require('express');
const { createUser } = require('../controllers/auth');
const router = express.Router();

// router.post('/login', );

router.post('/signup', async (req, res)=>{
    try {
        const email = req.body.email;
    const password = req.body.password;

    await createUser(email, password);
    } catch (error) {
        throw error;
    }
});

module.exports = router;