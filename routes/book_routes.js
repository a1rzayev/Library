const express = require('express');
const router = express.Router();
const book_controller = require('../controllers/book_controller');


/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: get books list
 *     responses:
 *       200:
 *         description: books list
 */
router.get('/', book_controller.getAll);

/**
 * @swagger
 * /api/books:
 *   post:
 *     summary: add book
 */
router.post('/', book_controller.create);

/**
 * @swagger
 * /api/books:
 *   put:
 *     summary: update book
 *     responses:
 *       200:
 *         description: book was updated
 *       404:
 *         description: book not found
 */
router.put('/:id', book_controller.update);

/**
 * @swagger
 * /api/books/{id}:
 *   delete:
 *     summary: delete book by id
 *     responses:
 *       200:
 *         description: book has been deleted
 *       404:
 *         description: book not found
 */
router.delete('/:id', book_controller.delete);

module.exports = router;
