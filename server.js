const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors());

app.get('/', (req, res) => res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }));
app.get('/Michelle', (req, res) => res.send({express: 'Hi Bro'}));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));