const express = require("express");
const router = express.Router();
const { GetAllFromYourList, AddToYourList } = require("../Controller/yourList");

router.get("/yourList/getAllAnimes", GetAllFromYourList);

router.post("/yourList/addAnime", AddToYourList);

module.exports = router;
