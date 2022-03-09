const express = require('express');
const { append } = require('express/lib/response');
const router = express.Router();
const { GetAllAnimeByGenre, GetAllAnime } = require('../Controller/animes');

router.get('/animes', GetAllAnimeByGenre);

module.exports = router;