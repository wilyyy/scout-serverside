const YourList = require("../Model/yourList");

const GetAllFromYourList = async (req, res) => {
   try {
      const yourListAnimes = await YourList.find({});
      res.send(yourListAnimes);
   } catch (e) {
      console.log(e);
      res.send("Error: " + e);
   }
};

const AddToYourList = (req, res) => {
   try {
      const yourListAnimes = new YourList();
      yourListAnimes.uid = req.body.uid;
      yourListAnimes.title = req.body.title;
      yourListAnimes.synopsis = req.body.synopsis;
      yourListAnimes.genre = req.body.genre;
      yourListAnimes.aired = req.body.aired;
      yourListAnimes.episodes = req.body.episodes;
      yourListAnimes.members = req.body.members;
      yourListAnimes.popularity = req.body.popularity;
      yourListAnimes.ranked = req.body.ranked;
      yourListAnimes.score = req.body.score;
      yourListAnimes.img_url = req.body.img_url;

      yourListAnimes.save();
      res.send();
   } catch (e) {
      console.log(e);
      res.send("Error: " + e);
   }
};

module.exports = {
   GetAllFromYourList,
   AddToYourList,
};
