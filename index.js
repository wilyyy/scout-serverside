const express = require("express");
const app = express();
const { ConnectToDb } = require("./mongoConfig");
const port = 4000;
const cors = require("cors");

const AnimeRouter = require("./Routes/animes");
const UserRouter = require("./Routes/users");

//-----------Import End-----------//

//configs
app.use(cors());
app.use(express.json());
ConnectToDb();

//routes
app.use(AnimeRouter);
app.use(UserRouter);

app.get("/", (req, res) => res.send("Hello World!!"));

app.listen(process.env.PORT || port, () =>
   console.log(`Server started on http://localhost:${port}/`)
);
