const express = require('express');
const cors = require('cors')
const { MongoClient } = require('mongodb');


// const Redis = require("ioredis");

// var redisClient = new Redis({
//     port: 6379, // Redis port
//     host: "redis-notifications", // Redis host
// });

const PORT = 5000;

const app = express();

app.use(cors())
app.use(express.json({ limit: '50mb', extended: true, parameterLimit: 50000 }));


const localClient = new MongoClient(`mongodb://mongo:27017`)
const col = localClient.db('docker-compose-example').collection('messages');

app.get('/', async (req, res) => {
    const message = await col.findOne({});
    return res.send(message);
});

// Start app
app.listen(PORT, () => {
    // async function redisConnect() {
    //     await redisClient.connect();
    // }
    // redisConnect();
    console.log(`Server listening on ${PORT}`);
});