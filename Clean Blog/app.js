const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const ejs = require('ejs');
const pageController = require('./controllers/pageController');
const postController = require('./controllers/postController');

const app = express();

// connect to db
mongoose
  .connect(
    'mongodb+srv://teco:teco123@cluster0.mqbyk.mongodb.net/?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err);
  });

// template engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method', { methods: ['POST', 'GET'] }));

// ROUTES
app.get('/', postController.getAllPosts);
app.post('/posts', postController.createPost); // creates a blog post
app.get('/posts/:id', postController.getPost); // get specific post
app.put('/posts/:id', postController.updatePost);
app.delete('/posts/:id', postController.deletePost);

app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPostPage);
app.get('/posts/edit/:id', pageController.getEditPage);

const port = process.env.PORT || 5000;

app.listen(port, (err) => {
  if (err) console.log('Sunucu başlatılamadı');
  console.log(`Sunucu başarıyla ${port} portunda çalışıyor...`);
});
