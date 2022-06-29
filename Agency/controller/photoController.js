const Photo = require('../models/Photo')
const fs = require('fs')

exports.createPortfolioItem = async (req, res) => {
  const uploadDir = 'public/uploads'
  // public dosyası içine uploads açtık yüklenen fotolar buraya gelecek
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir)
  }
  try {
    // upload photo
    let uploadImage = req.files.image
    let uploadPath = __dirname + '/../public/uploads/' + uploadImage.name // public klasöründe uploads diye bir yer oluşturmak ve yüklediğimiz resimleri oraya atmak istiyoruz

    uploadImage.mv(uploadPath, async () => {
      await Photo.create({
        ...req.body,
        image: '/uploads/' + uploadImage.name,
      })
      res.redirect('/')
    })
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error,
    })
  }
}

exports.getAllItems = async (req, res) => {
  const photos = await Photo.find({})
  res.render('portfolio', {
    photos,
  })
}

exports.getItem = async (req, res) => {
  const photo = await Photo.findById(req.params.id)
  res.render('photos', {
    photo /* db deki spesifik foto */,
  })
}

exports.editItem = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id })
  photo.title = req.body.title
  photo.desc = req.body.desc
  photo.client = req.body.client
  photo.category = req.body.category
  await photo.save()

  res.redirect(`/portfolio/photos/${req.params.id}`)
}

exports.removeItem = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id })
  let deleteImage = __dirname + '/..public/' + photo.image
  fs.unlink(deleteImage, (err) => {
    if (err) console.log(err)
    console.log('Removed')
  })
  await Photo.findByIdAndRemove(req.params.id)
  res.redirect('/portfolio')
}
