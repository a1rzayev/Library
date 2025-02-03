const express = require('express');
const router = express.Router();
const user_controller = require('../controllers/user_controller');


/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: get users list
 *     responses:
 *       200:
 *         description: users list
 */
router.get('/', user_controller.getAll);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: get user by id
 *     responses:
 *       200:
 *         description: user by id
 */
router.get('/:id', user_controller.getById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: add user
 */
router.post('/', user_controller.create);

/**
 * @swagger
 * /api/users:
 *   put:
 *     summary: update user
 *     responses:
 *       200:
 *         description: user was updated
 *       404:
 *         description: user not found
 */
router.put('/:id', user_controller.update);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: delete user by id
 *     responses:
 *       200:
 *         description: user has been deleted
 *       404:
 *         description: user not found
 */
router.delete('/:id', user_controller.delete);

module.exports = router;
