const mongoose = require('mongoose')
const Schema = mongoose.Schema

// create schema
const PhotoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
      trim: true,
    },
    client: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

const Photo = mongoose.model('Photo', PhotoSchema)
module.exports = Photo
