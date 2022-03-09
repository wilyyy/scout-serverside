//nodemon index to try
//change <password> to pikachu
const mongoose = require('mongoose');

db = {
    db_url: "mongodb+srv://willy:pikachu@scout.sakof.mongodb.net/Scout"
}

const ConnectToDb = async() => {
    console.log("connecting to db");
    await mongoose.connect(db.db_url, (err) =>{
        if(err){
            return console.log(err)
        } else{
            console.log("connected to db succesfully")
        }
    })
}

module.exports = { ConnectToDb };