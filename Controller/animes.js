const Animes = require("../Model/animes");

const GetAllAnime = async (req, res) => {
   const pageOptions = {
      page: parseInt(req.query.page, 20) || 0,
      limit: parseInt(req.query.limit, 20) || 20,
   };
   try {
      const animes = await Animes.find({})
         .skip(pageOptions.page * pageOptions.limit)
         .limit(pageOptions.limit);
      res.send(animes);
   } catch (e) {
      console.log(e); 
      res.send(e);
   }
};

const GetAllAnimeByGenre = async (req, res) => {
   try {
      const animesByGenre = await Animes.find(
         { genre: JSON.parse(req.query.genre) },
         null,
         { limit: 20 }
      );
      res.send(animesByGenre);
   } catch (e) {
      console.log(e); // let user know if an error has occured not in console
      res.send(e);
   }
};

module.exports = {
   GetAllAnime,
   GetAllAnimeByGenre,
};