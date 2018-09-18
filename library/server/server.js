require('dotenv').config();
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

const {SERVER_PORT, CONNECTION_STRING, SESSION_SECRET,} = process.env;

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}))

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db);
    console.log('Database reporting for duty.');
})

app.listen(SERVER_PORT, () => console.log(`Listening on ${SERVER_PORT}`))