const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set EJS as the templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware for parsing requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static assets from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  const posts = [
    { title: 'First Post', summary: 'Introduction to building web apps with Express and EJS.' },
    { title: 'Templates and Partials', summary: 'Learn how to modularize your views using partials.' },
    { title: 'Styling & Static Files', summary: 'Serving CSS, client scripts, and images seamlessly.' }
  ];

  res.render('index', {
    title: 'Home',
    message: 'Welcome to Express with EJS!',
    posts
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About'
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).render('404', {
    title: 'Page Not Found'
  });
});

// Start the server if executed directly
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
  });
}

module.exports = app;
