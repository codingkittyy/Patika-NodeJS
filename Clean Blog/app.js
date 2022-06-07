const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const blog = {
    id: 1,
    title: 'Blog Title',
    description: 'Blog description',
  };

  res.send(blog);
});

const port = 5000;

app.listen(port, (err) => {
  if (err) console.log('Sunucu başlatılamadı');
  console.log(`Sunucu başarıyla ${port} portunda çalışıyor...`);
});
