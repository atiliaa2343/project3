require('dotenv').config();
const mongoose = require('mongoose');
const express = require('express'); 
const booksRoutes = require('./routes/bookRoutes'); 
const membersRoutes = require('./routes/membersRoutes'); 
const staffRoutes = require('./routes/staffRoutes'); 
const errorHandler = require('./middlewares/error'); 

const app = express();  

// MongoDB connection
const mongoURI = 'mongodb+srv://atiliaathomas:Basketball12@cluster0.y9dfl.mongodb.net/?retryWrites=true&w=majority';;
mongoose.connect(mongoURI, { useNewUrlParser: true})
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('MongoDB connection error:', err));

app.use(express.json()); 
app.use('/api/books', booksRoutes); 
app.use('/api/members', membersRoutes); 
app.use('/api/staff', staffRoutes); 

app.use(errorHandler); 

module.exports = app;