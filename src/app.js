const express = require('express')
require('dotenv').config()
const mongoose = require("mongoose");
const app = express()
//const router = require("./api/routes/index");

app.use(express.json())
//app.use('/', router);

const startApp = async () => {
  try {
    await mongoose.connect("mongodb+srv://user:user@cluster0.p4oeedo.mongodb.net/?retryWrites=true&w=majority")
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server started on port http://localhost:${process.env.SERVER_PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

require('./database').init()
startApp()