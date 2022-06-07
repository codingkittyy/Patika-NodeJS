const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create a schema
const BlogSchema = new Schema({
  title: String,
  subtitle: String,
  message: String,
  author: String,
  postDate: {
    type: Date,
    default: Date.now(),
  },
});

const Blog = mongoose.model('Post', BlogSchema); // yani posts adlı bir collection oluşturacak bize mongodb de

module.exports = Blog;
