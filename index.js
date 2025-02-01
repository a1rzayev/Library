const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/mongodb');
const userRoutes = require('./routes/user_routes');
const postRoutes = require('./routes/post_routes');
const bookRoutes = require('./routes/book_routes');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const app = express();
const PORT = 5000;

connectDB();

app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/books', bookRoutes);

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Express API with MongoDB",
            version: "1.0.0",
            description: "API for author-post-book configuration",
        },
    },
    apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

console.log("Swagger i available on http://localhost:5000/api-docs");

// Запуск сервера
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
