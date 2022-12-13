const express = require('express')
const app = express()
const itemRoutes = require('./routes/itemsRoutes')
const userRoutes = require('./routes/usersRoutes')
const connectDB = require('./db/connect')
require('dotenv').config()
const port = 5000

app.use('/api/v1/items', itemRoutes)
app.use('/api/v1/users', userRoutes)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log(`App listening on port ${port}...`)
    })
    
  } catch (error) {
    console.log(error)
  }
}

start()

