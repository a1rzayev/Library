const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/usersdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB has connected successfully');
    } catch (err) {
        console.error('Error during connecting to MongoDB:', err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
