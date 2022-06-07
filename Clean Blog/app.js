const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const ejs = require('ejs');
const Blog = require('./models/Blog');

const app = express();

// connect to db
mongoose.connect('mongodb://localhost/clean-blog-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// template engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.get('/', async (req, res) => {
  const posts = await Blog.find({});
  res.render('index', {
    posts,
  });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

// create a blog post
app.post('/posts', async (req, res) => {
  await Blog.create(req.body);
  res.redirect('/');
});

const port = 5000;

app.listen(port, (err) => {
  if (err) console.log('Sunucu başlatılamadı');
  console.log(`Sunucu başarıyla ${port} portunda çalışıyor...`);
});
