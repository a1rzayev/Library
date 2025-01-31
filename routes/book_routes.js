const express = require('express');
const router = express.Router();
const Book = require('../models/book');
const User = require('../models/user');

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: add book
 */
router.post('/', async (req, res) => {
    try {
        const { title, author, publishedYear, genre } = req.body;

        const userExists = await User.findById(author);
        if (!userExists) return res.status(404).json({ message: "Author hasnt been found" });

        const newBook = new Book({ title, author, publishedYear, genre });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: author-book list
 */
router.get('/', async (req, res) => {
    try {
        const books = await Book.find().populate('author', 'name email');
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
