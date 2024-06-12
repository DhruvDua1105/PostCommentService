require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
const commentRoutes = require('./routes/comments');

const app = express();
const PORT = process.env.PORT || 3000;

//configuration to use EJS
app.set('view engine', 'ejs');
app.set('views', 'views');

//Middlewares used in the project
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(bodyParser.json());

//Home Page
app.get('/', (req, res) => {
      res.render('home'); 
});

// Routes for the project
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Connection to MongoDB database
mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
}).then(() => {
      console.log('Connected to MongoDB');
      app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
      });
}).catch(err => {
      console.error('MongoDB connection error:', err);
});
