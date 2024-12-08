const mongoose = require('mongoose'); 

const bookSchema = new mongoose.Schema({ 
    title: String, 
    author: String, 
    genre: String, 
    publishedYear: Number, 
    isFiction: Boolean, 

}); 

module.exports = mongoose.model('Book', bookSchema);