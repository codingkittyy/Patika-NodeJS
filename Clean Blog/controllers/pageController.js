const Blog = require('../models/Blog');

exports.getAddPostPage = (req, res) => {
  res.render('add_post');
};

exports.getAboutPage = (req, res) => {
  res.render('about');
};

exports.getEditPage = async (req, res) => {
  const post = await Blog.findById({ _id: req.params.id });
  res.render('edit', {
    post,
  });
};
