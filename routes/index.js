require("regenerator-runtime/runtime");
import jokes from "../jokesController/jokes";

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {title: 'Joker\'s App'});
});

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
