const express = require('express')
const pageController = require('../controller/pageController')

const router = express.Router()

router.route('/').get(pageController.getHomePage)
router.route('/add').get(pageController.getAddPage)
router.route('/about').get(pageController.getAboutPage)
router.route('/contact').get(pageController.getContactPage)
router.route('/contact').post(pageController.sendEmail)
router.route('/edit/:id').get(pageController.getEdit)

module.exports = router
