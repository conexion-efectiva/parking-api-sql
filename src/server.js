const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080
const initializeAuthentication = require('./auth/authentication')


app.use(express.json())




const ticketRoutes = require('./routes/ticketRoute')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/authRoutes')
const floorRoutes=require('./routes/floorRoutes')

 
initializeAuthentication()
app.use('/api',ticketRoutes)
app.use('/api', authRoutes)
app.use('/api', userRoutes)
app.use('/api', floorRoutes)

app.listen(port, () => {
  console.log('App listening on port ', port)
})