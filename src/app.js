const express = require('express');

const app = express();
const port = 3000;
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Home',
  });
});
app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About',
  });
});
app.get('/blogs/create', (req, res) => {
  res.render('create', {
    title: 'Create a new blog',
  });
});
app.use((req, res) => {
  res.status(404).render('404', {
    title: '404',
  });
});
