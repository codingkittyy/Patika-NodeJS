const express = require('express')
const portfolioController = require('../controllers/portfolio')

const router = express.Router()

// Create Porfolio Item
router.post('/', portfolioController.createPortfolio)

// GET ALL
router.get('/', portfolioController.getPortfolios)

// GET ONE
router.get('/:id', portfolioController.getPortfolio)

// UPDATE
router.put('/:id', portfolioController.updatePortfolio)

// DELETE ITEM
router.delete('/:id', portfolioController.deletePortfolio)

module.exports = router
