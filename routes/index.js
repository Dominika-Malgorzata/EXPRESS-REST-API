import jokes from "../jokesService/jokes";

const swaggerJsdoc = require('swagger-jsdoc');
const options = require('../swagger/options');
const specs = swaggerJsdoc(options);
const swaggerUi = require('swagger-ui-express');

const express = require('express');
const router = express.Router();

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(specs));

router.get('/jokes', (req, res) => {
    return jokes.getAllJokes(req, res);
});

router.get('/jokes/:id', (req, res) => {
    return jokes.getJoke(req, res)
});

router.post('/jokes', (req, res) => {
    return jokes.postJoke(req, res)
});

router.put('/jokes/:id', (req, res) => {
    return jokes.updateJoke(req, res)
});

router.delete('/jokes/:id', (req, res) => {
    return jokes.deleteJoke(req, res);
});

module.exports = router;


/**
 * @swagger
 *  components:
 *    schemas:
 *      Joke:
 *        type: object
 *        required: false
 *        properties:
 *          title:
 *            type: string
 *          content:
 *            type: string
 *            description: Both are optional
 *        example:
 *           title: Pillow
 *           content: I dreamed I was forced to eat a giant marshmallow. When I woke up, my pillow was gone.
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *      idJoke:
 *        type: object
 *        required: false
 *        properties:
 *          -M4uTHkengdgMGyxYYhg:
 *              type: object
 *              required: false
 *              properties:
 *                  title:
 *                      type: string
 *                      example: Pillow
 *                  content:
 *                      type: string
 *                      example: I dreamed I was forced to eat a giant marshmallow. When I woke up, my pillow was gone.
 */

/**
 * @swagger
 * tags:
 *   name: Jokes
 *   description: Joke management
 */

/**
 * @swagger
 * path:
 *  /jokes:
 *    get:
 *      summary: Get all jokes
 *      tags: [Jokes]
 *
 *      responses:
 *        "200":
 *          description: All jokes objects
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/idJoke'
 */

/**
 * @swagger
 * path:
 *  /jokes/{jokeId}:
 *    get:
 *      summary: Get a joke by id
 *      tags: [Jokes]
 *      parameters:
 *        - in: path
 *          name: jokeId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the joke
 *      responses:
 *        "200":
 *          description: An joke object
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Joke'
 */

/**
 * @swagger
 * path:
 *  /jokes:
 *    post:
 *      summary: Create a new joke
 *      tags: [Jokes]
 *      requestBody:
 *        required: false
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Joke'
 *      responses:
 *        "201":
 *          description: Joke
 *          content:
 *            application/json:
 *              schema:
 *               $ref: '#/components/schemas/idJoke'
 */

/**
 * @swagger
 * path:
 *  /jokes/{jokeId}:
 *    put:
 *      summary: Update a joke
 *      tags: [Jokes]
 *      parameters:
 *        - in: path
 *          name: jokeId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the joke
 *      requestBody:
 *        required: false
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Joke'
 *      responses:
 *        "200":
 *          description: Joke
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/Joke'
 */

/**
 * @swagger
 * path:
 *  /jokes/{jokeId}:
 *    delete:
 *      summary: Delete a joke by id
 *      tags: [Jokes]
 *      parameters:
 *        - in: path
 *          name: jokeId
 *          schema:
 *            type: string
 *          required: true
 *          description: Id of the joke
 *      responses:
 *        "204":
 *          description:
 *          content:
 */


