const express = require('express');
const mongoDB = require('./database')
require('dotenv').config({path: '.env'})
const app = express();

mongoDB();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/dashboard', require('./routes/routes'))

const PORT = process.env.PORT || 3002;

app.listen(PORT, () => {
    console.log( `Server listening on ${PORT}` );
})