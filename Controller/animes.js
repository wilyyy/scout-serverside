//add error handling to controller funcs, try catch?
const Animes = require('../Model/animes');

const GetAllAnime = async(req, res) => {
    try {
        const animes = await Animes.find({}, null, {limit: 20});
        res.send(animes);
    } catch (e) {
        console.log(e); // let user know if an error has occured not in console
        res.send(e);
    }
}

const GetAllAnimeByGenre = async(req, res) => {
    try {
        const animesByGenre = await Animes.find({genre: JSON.parse(req.query.genre)}, null, {limit: 20});
        res.send(animesByGenre);
    } catch (e) {
        console.log(e); // let user know if an error has occured not in console
        res.send(e);
    }
}

module.exports = {
    GetAllAnime,
    GetAllAnimeByGenre
}