const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: { type: String, required: true },
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    publishedYear: { type: Number, required: true },
    genre: { type: String, required: true }
});

module.exports = mongoose.model('Book', bookSchema);