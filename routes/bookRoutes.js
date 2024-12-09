const express = require('express'); 
const {getBooks, createBook, updateBook, deleteBook } = require('../controllers/book'); 
const router = express.Router(); 

/**
 * Book routes for handling CRUD operations.
 * @module routes/bookRoutes
 */

/**
 * Route to get all books.
 * @name GET /api/books
 * @function
 * @memberof module:routes/bookRoutes
 */
router.get('/', getBooks); 

/**
 * Route to create a new book.
 * @name POST /api/books
 * @function
 * @memberof module:routes/bookRoutes
 */
router.post('/', createBook);  

/**
 * Route to update an existing book by ID.
 * @name PUT /api/books/:id
 * @function
 * @memberof module:routes/bookRoutes
 * @param {string} id - The ID of the book to update.
 */
router.put('/:id', updateBook); 

/**
 * Route to delete a book by ID.
 * @name DELETE /api/books/:id
 * @function
 * @memberof module:routes/bookRoutes
 * @param {string} id - The ID of the book to delete.
 */
router.delete('/:id', deleteBook); 

module.exports = router;