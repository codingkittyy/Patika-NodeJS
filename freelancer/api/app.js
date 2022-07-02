const express = require('express')
const dotenv = require('dotenv')
const fileUpload = require('express-fileupload')
const mongoose = require('mongoose')
const cors = require('cors')
const portfolioRouter = require('./router/portfolios')

// Middlewares
const app = express()
dotenv.config()
app.use(express.json())
app.use(fileUpload())
app.use(cors())

mongoose
  .connect('mongodb://localhost:27017/freelance', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected')
  })

// Routes
app.use('/api/portfolios', portfolioRouter)

const port = 3001
app.listen(port, () =>
  console.log(`Freelancer Project is running on port: ${port}`)
)
