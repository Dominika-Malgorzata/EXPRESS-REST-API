require("regenerator-runtime/runtime");
import db from "../db/db";

class JokesController {
    async getAllJokes(req, res) {
        res.json(await db.ref('/jokes/').once('value').then(snapshot => snapshot.val()));
    }

    async getJoke(req, res) {
        res.json(await db.ref('/jokes/' + req.params.id).once('value').then(snapshot => snapshot.val()))
    }

    async postJoke(req, res) {
        // add validation - now data can be inconsistent, but's just a demo
        res.json(await db.ref().child('jokes').push(req.body).then(link => ({[link.getKey()]: req.body})))
    }

    async updateJoke(req, res) {
        // add validation - as in post
        const isIdCorrect = await db.ref('/jokes/' + req.params.id).once('value').then(snapshot => snapshot.val());
        isIdCorrect ? db.ref('/jokes/'+ req.params.id).set(req.body, error => {
            error ? res.status(error.code).json({message: error.message}) : res.send();
        }) : res.status(400).json({message: "incorrect joke id"})
    }

    async deleteJoke(req, res) {
        const isIdCorrect = await db.ref('/jokes/' + req.params.id).once('value').then(snapshot => snapshot.val());
        isIdCorrect ? db.ref('/jokes/' + req.params.id).remove(error => {
            error ? res.status(error.code).json({message: error.message}) : res.status(204).send();
        }) : res.status(400).json({message: "incorrect joke id"})
    }
}

const jokes = new JokesController();
export default jokes;



