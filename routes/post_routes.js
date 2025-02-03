const express = require('express');
const router = express.Router();
const post_controller = require('../controllers/post_controller');


/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: get posts list
 *     responses:
 *       200:
 *         description: posts list
 */
router.get('/', post_controller.getAll);

/**
 * @swagger
 * /api/posts:
 *   post:
 *     summary: add post
 */
router.post('/', post_controller.create);

/**
 * @swagger
 * /api/posts:
 *   put:
 *     summary: update post
 *     responses:
 *       200:
 *         description: post was updated
 *       404:
 *         description: post not found
 */
router.put('/:id', post_controller.update);

/**
 * @swagger
 * /api/posts/{id}:
 *   delete:
 *     summary: delete post by id
 *     responses:
 *       200:
 *         description: post has been deleted
 *       404:
 *         description: post not found
 */
router.delete('/:id', post_controller.delete);

module.exports = router;
