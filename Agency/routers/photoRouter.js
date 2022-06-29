const express = require('express')
const photoController = require('../controller/photoController')

const router = express.Router()

// CREATE PORTFOLIO ITEM
router.post('/', photoController.createPortfolioItem)
router.get('/', photoController.getAllItems)
router.get('/photos/:id', photoController.getItem)
router.put('/photos/:id', photoController.editItem)
router.delete('/photos/:id', photoController.removeItem)

module.exports = router
