const express = require('express');
const router = express.Router();
const User = require('../models/user');

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: get users list
 *     responses:
 *       200:
 *         description: users list
 */
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: add user
 */
router.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;
        const newUser = new User({ name, email });
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
