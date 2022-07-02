const mongoose = require('mongoose')
const { Schema } = mongoose

const PortfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
})

const Portfolio = mongoose.model('Portfolio', PortfolioSchema)
module.exports = Portfolio
