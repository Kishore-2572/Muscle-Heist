const express = require('express')
const dotenv=require('dotenv')
const mongoose = require('mongoose');
dotenv.config()
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(process.env.PORT, () => console.log(`App listening on port ${process.env.PORT}!`))