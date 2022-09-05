import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = 3000

app.use(express.json())

app.post('/', (request, response) => {
  console.log(request.body);
  response.status(200).json('Server runing...')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})