// import the libararies to be used //
const express = require("express");
const mongodb = require ("mongodb");
const mongoose = require ("mongoose");
const cors = require("cors")

// use apps and set the port //
const app = express();
app.use(express.json())
app.use(cors())
var port = process.env.PORT||3000;

//mongoose.connect(process.env.MONGODB_URL)//

//set up the mongo client //

const mongoClient = mongodb.MongoClient;
const mongoUrl = "mongodb://127.0.0.1:27017/"


 app.listen(process.env.PORT||3000, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});
 //} => console.log("Up and running on port 3000"));
