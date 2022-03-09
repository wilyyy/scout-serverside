const express = require('express');
const app = express();
const mongoose = require('mongoose');
const { ConnectToDb } = require('./mongoConfig');
const port = 4000;

const AnimeRouter = require('./Routes/animes');

//-----------Import End-----------//
//configs
app.use(express.json());
ConnectToDb();

//routes
app.use(AnimeRouter);

app.get('/', (req, res) => res.send('Hello World!!'));

app.listen(process.env.PORT || port, () => console.log(`Server started on localhost:${port}`));