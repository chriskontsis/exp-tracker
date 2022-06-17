const express = require('express');
const app = express();
const cors = require('cors');

require('dotenv').config({path:"./config.env"});
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// mongodb connection
const con = require('./db/connection.js');
const { connection } = require('mongoose');

// using routes
app.use(require('./routes/route'));

con.then(db => {
    if(!db) return process.exit(1);
    app.listen(port, () => {
        console.log('Server is running on port:' + port)
    })
    app.on('error', err => console.log("Failed to Connect with HTTP Server"));
    //error in mongodb connectoin
}).catch(error => {
    console.log("Connection Failed...!" + error);
})
