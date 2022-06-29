const nodemailer = require('nodemailer')
const Photo = require('../models/Photo')

exports.getHomePage = async (req, res) => {
  res.status(200).render('index', {
    page_name: 'index',
  })
}

exports.getAddPage = async (req, res) => {
  res.render('add')
}

exports.getAboutPage = async (req, res) => {
  res.render('about')
}

exports.getContactPage = async (req, res) => {
  res.render('contact')
}

exports.sendEmail = async (req, res) => {
  try {
    const outputMessage = `
  <h1>Mail Details </h1>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>Email: ${req.body.email}</li>
    <li>Phone Number: ${req.body.phone}</li>
  </ul>
  <h1>Message</h1>
  <p>Message: ${req.body.message}</p>
  `
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: 'projectsofteco@gmail.com', // generated gmail acc
        pass: 'mzjagadlvkqrojos', // generated gmail password
      },
    })

    // send mail with defined transport object
    let info = await transporter.sendMail({
      from: '"Portfolio Contact Form 👻" <projectsofteco@gmail.com>', // sender address
      to: 'projectsofteco@gmail.com', // list of receivers
      subject: 'Contact Form Has New Message ✔', // Subject line
      html: outputMessage, // html body
    })

    console.log('Message sent: %s', info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

    res.render('contact')
  } catch (err) {
    res.status(400).redirect('/')
  }
}

exports.getEdit = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id })
  res.render('edit', {
    photo,
  })
}
