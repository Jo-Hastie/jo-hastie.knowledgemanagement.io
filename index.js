/* import the libararies to be used */
const express = require("express");
const mongodb = require ("mongodb");
const mongoose = require ("mongoose");
const cors = require("cors")

/* use apps and set the port */
const app = express();
app.use(express.json())
app.use(cors())
let port = process.env.port||3000;

/*mongoose.connect(process.env.MONGODB_URL)

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://<jhasti202@caledonian.ac.uk>:<Yellow55>@cluster0-vniam.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});
*/
/* set up the mongo client */

const mongoClient = mongodb.MongoClient;
const mongoUrl = "mongodb://127.0.0.1:27017/"

app.get("/a", (request, response) =>{
    response.send('test1')
})

app.get("/", (request, response) => {
    response.send('Hello world')
})
 
/* set up get connection to database */

app.get("/getThings", (request, response) => {

     mongoClient.connect(mongoUrl, (err, db) => {
        if(err) throw err;
        let dbx = db.db("knowledgemanagement")

        const x = dbx.collection("risk").find({}).toArray((err, res) => {
            if(err) throw err;
            response.send(res)
        })

        db.close();
    })

})

/* set up create connection to database */

app.post("/makethings", (request, response) => {
    console.log(request.body.contentUrl)
    mongoClient.connect(mongoUrl, (err, db) => {
        if(err) throw err;
        let dbx = db.db("knowledgemanagement")

        dbx.collection("risk").insertOne(request.body, (err, res) => {
            if (err) throw err;
        }
        )

        db.close();
    })
})



 /* test to show that the applicaiton is connected to the port */

 app.listen(port, () => console.log("Up and running on port 3000"));
