const express = require("express");
const router = express.Router();
const { GetAllFromYourList, AddToYourList } = require("../Controller/yourList");
const AuthorizeUser = require("../Auth/auth");

router.get("/yourList/getAllAnimes", AuthorizeUser, GetAllFromYourList);

router.post("/yourList/addAnime", AuthorizeUser, AddToYourList);

module.exports = router;
