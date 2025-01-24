const fs = require('fs');
const path = require('path');

const booksFilePath = path.join(__dirname, '..', 'materials', 'books.json');

const loadBooks = () => {
    if (!fs.existsSync(booksFilePath)) {
        fs.writeFileSync(booksFilePath, JSON.stringify([]));
    }
    const data = fs.readFileSync(booksFilePath, 'utf8');
    return JSON.parse(data);
};

const saveBooks = (books) => {
    fs.writeFileSync(booksFilePath, JSON.stringify(books, null, 2));
};

const addBook = (title, author, year, genre) => {
    const books = loadBooks();
    const newBook = {
        id: Date.now(), 
        title,
        author,
        year,
        genre
    };
    books.push(newBook);
    saveBooks(books);
};

const viewBooks = () => {
    const books = loadBooks();
    if (books.length === 0) {
        console.log("No books available.");
    } else {
        books.forEach(book => {
            console.log(`${book.id}: ${book.title} by ${book.author} (${book.year}) - Genre: ${book.genre}`);
        });
    }
};

const updateBook = (id, title, author, year, genre) => {
    const books = loadBooks();
    const index = books.findIndex(book => book.id === id);
    if (index === -1) {
        console.log("Book not found.");
        return;
    }
    books[index] = { id, title, author, year, genre };
    saveBooks(books);
};

const deleteBook = (id) => {
    const books = loadBooks();
    const updatedBooks = books.filter(book => book.id !== id);
    if (updatedBooks.length === books.length) {
        console.log("Book not found.");
        return;
    }
    saveBooks(updatedBooks);
};

module.exports = { addBook, viewBooks, updateBook, deleteBook };
