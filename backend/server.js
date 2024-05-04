const colors = require('colors')
const app = require('./app')
require('dotenv').config()



app.listen(process.env.PORT, () => {
  console.log("Server Running On :".green.bold, process.env.PORT)
})