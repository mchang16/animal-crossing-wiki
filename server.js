const express = require('express')
const assert = require('assert');
const mongo = require('mongodb');
const cors = require('cors')
const app = express()
const port = 5000


var villagerData = null;
const uri = "mongodb+srv://Pinkkirby:H833oK5tty@cluster0.x5tcn.mongodb.net/AnimalCrossingWiki?retryWrites=true&w=majority";


// async function because we have to wait for it to connect to DB AND for the query

//  async function run (){
//   const client = await MongoClient.connect(uri, { useUnifiedTopology: true });

//   const collection = await client.db("AnimalCrossingWiki").collection("Villager");
//   villagerData = collection.find({}, {projection:{_id:0}}).toArray();
//   client.close();

// }
// run();


app.get('/', (req, res) => res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }));
app.get('/villagers', (request, response) => {
  var resultArray = [];
  mongo.connect(uri, function(err, client){
    assert.equal(null, err);
    var db = client.db("AnimalCrossingWiki");
    var cursor = db.collection("Villager").find({}, {projection:{_id:0}}); 
    cursor.forEach(function(doc, err){
      resultArray.push(doc)
    }, function(){
      client.close()
      response.send(resultArray);
    })
  })
})

app.listen(port, () => console.log(`Listening at http://localhost:${port}`));
