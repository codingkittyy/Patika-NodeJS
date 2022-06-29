const express = require('express')
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
const methodOverride = require('method-override')
const ejs = require('ejs')
const pageRoute = require('./routers/pageRouter')
const photoRoute = require('./routers/photoRouter')
const photoController = require('./controller/photoController')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) // bu ve altındaki middleware req-res döngüsünü sonlandırmamızı sağladı
app.use(express.json())
app.use(fileUpload())
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }))

mongoose
  .connect(
    'mongodb+srv://teco:teco@cluster0.gcicw.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('MongoDB connected')
  })

app.use('/', pageRoute)
app.use('/portfolio', photoRoute)

const port = 3000

app.listen(port, () =>
  console.log(`Agency App Project is running on port: ${port}`)
)
