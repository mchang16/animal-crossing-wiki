const express = require('express')
//{MongoClient} is just a variable from the export of 'mongodb' module
const {MongoClient} = require('mongodb');
const cors = require('cors')
const app = express()
const port = 5000

//app.use(cors());

var villagerData = null;

// async function because we have to wait for it to connect to DB AND for the query

async function run (){
  const uri = "mongodb+srv://Pinkkirby:{password}@cluster0-x5tcn.mongodb.net/AnimalCrossingWiki?retryWrites=true&w=majority";
  const client = await MongoClient.connect(uri, { useUnifiedTopology: true });

  const collection = client.db("AnimalCrossingWiki").collection("Villager");
  villagerData = await collection.find({}, {projection:{_id:0}}).toArray();
  //console.log(villagerData)
  client.close();

}
run();

app.get('/', (req, res) => res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }));
app.get('/villagers', (req, res) => res.send(villagerData));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
