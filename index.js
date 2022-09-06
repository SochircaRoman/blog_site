import express from 'express'
import mongoose from 'mongoose'
import Post from './Post.js'

const app = express()
const port = 3000
const DB_URL = 'mongodb+srv://user:user@cluster0.p4oeedo.mongodb.net/?retryWrites=true&w=majority'

app.use(express.json())

app.post('/', async (request, response) => {
  try {
    const {author, title, content, picture} = request.body
    const post = await Post.create({author, title, content, picture})
    response.json(post) 
  } catch (error) {
    response.status(500).json(error)
  }
})

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(port, () => {
      console.log(`Server started on port http://localhost:${port}`)
    })
  } catch (error) {
    console.log(error)
  }
}

startApp()

