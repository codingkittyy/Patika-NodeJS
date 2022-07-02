const Portfolio = require('../models/Portfolio')
const fs = require('fs')
const Photo = require('../../../PCAT/models/Photo')

exports.createPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.create(req.body)
    res.status(200).json(portfolio)
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    })
  }
}

exports.updatePortfolio = async (req, res) => {
  try {
    const uptdPortfolio = await Portfolio.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          title: req.body.title,
          desc: req.body.desc,
        },
      },
      { new: true }
    )
    res.status(200).json(uptdPortfolio)
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    })
  }
}

exports.getPortfolios = async (req, res) => {
  try {
    const portfolios = await Portfolio.find({})
    res.status(200).json(portfolios)
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    })
  }
}

exports.getPortfolio = async (req, res) => {
  try {
    const portfolio = await Portfolio.findById(req.params.id)
    res.status(200).json(portfolio)
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    })
  }
}

exports.deletePortfolio = async (req, res) => {
  try {
    await Portfolio.findByIdAndDelete(req.params.id)
    res.status(200).json('Portfolio Item Removed')
  } catch (error) {
    res.status(400).json({
      status: 'fail',
      error: error.message,
    })
  }
}
