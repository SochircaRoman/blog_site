require('dotenv').config({path: '../../.env'})
const config = {
  "host": process.env.DB_HOST
}
module.exports = config