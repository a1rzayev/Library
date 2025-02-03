const Book = require('../models/book');

exports.getAll = async (req, res) => {
    try {
        const books = await Book.find().populate('author', 'name email genre');
        res.json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.create = async (req, res) => {
    try {
        const { title, author, publishedYear, genre } = req.body;
        const newBook = new Book({ title, author, publishedYear, genre });
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.update = async (req, res) => {
    try {
        const { title, publishedYear, genre } = req.body;
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, { title, publishedYear, genre }, { new: true });
        if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
        res.json(updatedBook);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id);
        if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
        res.json({ message: 'Book has been deleted' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
