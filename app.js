const express = require('express'); 
const booksRoutes = require('./routes/bookRoutes'); 
const booksRoutes = require('./routes/membersRoutes'); 
const booksRoutes = require('./routes/staffRoutes'); 
const errorHandler = require('./middlewares/error'); 

const app = express(); 

app.use(express.json()); 
app.use('/api/books', booksRoutes); 
app.use('/api/members', membersRoutes); 
app.use('/api/staff', staffRoutes); 

app.use(errorHandler); 

module.exports = app;