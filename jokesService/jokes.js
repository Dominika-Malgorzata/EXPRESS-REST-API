require("regenerator-runtime/runtime");
import db from "../db/db";

class JokesService {
    isIdCorrect(req, res) {
        return db.ref('/jokes/' + req.params.id).once('value').then(snapshot => snapshot.val());
    }

    incorrectId(req, res) {
        res.status(400).json({message: "incorrect joke id"});
    }

    async getAllJokes(req, res) {
        res.json(await db.ref('/jokes/').once('value').then(snapshot => snapshot.val()));
    }

    async getJoke(req, res) {
        res.json(await db.ref('/jokes/' + req.params.id).once('value').then(snapshot => snapshot.val()))
    }

    async postJoke(req, res) {
        // add validation - now data in db can be inconsistent, but it's just a demo
        res.status(201).json(await db.ref().child('jokes').push(req.body).then(link => ({[link.getKey()]: req.body})))
    }

    async updateJoke(req, res) {
        // add validation - same as in post; also it's definitely not optimal put, but it was quicker to write
        await this.isIdCorrect(req, res) ? db.ref('/jokes/' + req.params.id).set(req.body, async error => {
            error ? res.status(error.code).json({message: error.message}) : await this.getJoke(req, res);
        }) : this.incorrectId(req, res)
    }

    async deleteJoke(req, res) {
        await this.isIdCorrect(req, res) ? db.ref('/jokes/' + req.params.id).remove(error => {
            error ? res.status(error.code).json({message: error.message}) : res.status(204).send();
        }) : this.incorrectId(req, res)
    }
}

const jokes = new JokesService();
export default jokes;



