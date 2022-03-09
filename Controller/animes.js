//add error handling to controller funcs, try catch?
const Animes = require('../Model/animes');

const GetAllAnime = (req, res) => {
    console.log(req, res);
    Animes.find({}, (err, animeData) => res.json(animeData));
}

const GetAllAnimeByGenre = (req, res) => {
    console.log(req.query);
    Animes.find({genre: JSON.parse(req.query.genre)}, (err, animeData) => {
        console.log(animeData);
        res.json(animeData);
    });
}

module.exports = {
    GetAllAnime,
    GetAllAnimeByGenre
}