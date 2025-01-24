const readline = require('readline');
const { addBook, viewBooks, updateBook, deleteBook } = require('./services/book_service');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const askQuestion = (question) => {
    return new Promise(resolve => rl.question(question, resolve));
};

const mainMenu = async () => {
    console.log("\nWelcome to the Library");
    console.log("1. Add a new book");
    console.log("2. View all books");
    console.log("3. Update a book");
    console.log("4. Delete a book");
    console.log("5. Exit");

    const choice = await askQuestion("Please select an option: ");
    
    switch (choice) {
        case '1':
            await addNewBook();
            break;
        case '2':
            viewBooks();
            break;
        case '3':
            await updateExistingBook();
            break;
        case '4':
            await deleteBookById();
            break;
        case '5':
            rl.close();
            return;
        default:
            console.log("Invalid choice. Please try again.");
    }

    mainMenu(); 
};

const addNewBook = async () => {
    const title = await askQuestion("Enter book title: ");
    const author = await askQuestion("Enter book author: ");
    const year = await askQuestion("Enter book year: ");
    const genre = await askQuestion("Enter book genre: ");
    
    addBook(title, author, year, genre);
    console.log("Book added successfully!");
};

const updateExistingBook = async () => {
    const id = parseInt(await askQuestion("Enter book ID to update: "));
    const title = await askQuestion("Enter new book title: ");
    const author = await askQuestion("Enter new book author: ");
    const year = await askQuestion("Enter new book year: ");
    const genre = await askQuestion("Enter new book genre: ");
    
    updateBook(id, title, author, year, genre);
    console.log("Book updated successfully!");
};

const deleteBookById = async () => {
    const id = parseInt(await askQuestion("Enter book ID to delete: "));
    deleteBook(id);
    console.log("Book deleted successfully!");
};

mainMenu();
