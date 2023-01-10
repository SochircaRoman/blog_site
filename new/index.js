import express from "express";
import mongoose from "mongoose";
import router from "./new/router.js";
require('dotenv').config()

const app = express()

app.use(express.json())
app.use("/api", router)

const startApp = async () => {
  try {
    await mongoose.connect(process.env.DB_URL)
    app.listen(process.env.SERVER_PORT, () => {
      console.log(`Server started on port http://localhost:${process.env.SERVER_PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()

