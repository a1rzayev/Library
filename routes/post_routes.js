const express = require('express');
const router = express.Router();
const Post = require('../models/post');
const User = require('../models/user');

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: add post
 */
router.post('/', async (req, res) => {
    try {
        const { title, content, author } = req.body;

        const userExists = await User.findById(author);
        if (!userExists) return res.status(404).json({ message: "Пользователь не найден" });

        const newPost = new Post({ title, content, author });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: author-post list
 */
router.get('/', async (req, res) => {
    try {
        const posts = await Post.find().populate('author', 'name email');
        res.json(posts);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
