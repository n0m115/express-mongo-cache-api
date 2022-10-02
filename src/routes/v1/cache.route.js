const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const cacheValidation = require('../../validations/cache.validation');
const cacheController = require('../../controllers/cache.controller');

const router = express.Router();

router.route('/').post(auth('manageCache'), validate(cacheValidation.createCache), cacheController.createCache);

router
  .route('/:cacheId')
  .get(auth('getCache'), validate(cacheValidation.getCache), cacheController.getCache)
  .patch(auth('manageCache'), validate(cacheValidation.updateCache), cacheController.updateCache)
  .delete(auth('manageCache'), validate(cacheValidation.deleteCache), cacheController.deleteCache);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Cache
 *   description: Cache management and retrieval
 */

/**
 * @swagger
 * /cache:
 *   post:
 *     summary: Create a cache
 *     description: Create a cache.
 *     tags: [Cache]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - value
 *             properties:
 *               value:
 *                 type: string
 *             example:
 *               value: fake value
 *     responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Cache'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 * /cache/{id}:
 *   get:
 *     summary: Get a cache value
 *     description: Logged in user can fetch cache value by id.
 *     tags: [Cache]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         id: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Cache id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Cache'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a Cache
 *     description: Logged in user can update cache.
 *     tags: [Cache]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: cache id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *                 format: email
 *                 description: must be unique
 *               password:
 *                 type: string
 *                 format: password
 *                 minLength: 8
 *                 description: At least one number and one letter
 *             example:
 *               name: fake name
 *               email: fake@example.com
 *               password: password1
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Cache'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a cache
 *     description: Logged in user can delete cache.
 *     tags: [Cache]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: cache id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */
