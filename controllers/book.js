const Book = require('../models/bookModel'); 

/**
 * Book controller for handling CRUD operations.
 * @module controllers/book
 */

/**
 * Get all books.
 * @async
 * @function getBooks
 * @param {Request} req - The Express request object.
 * @param {Response} res - The Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} A JSON response containing an array of all books.
 */
exports.getBooks = async (req, res, next) => { 
    try { 
        const books = await Book.find(); 
        res.json(books);
    } catch (error) { 
        next(error);
    }
}; 

/**
 * Create a new book.
 * @async
 * @function createBook
 * @param {Request} req - The Express request object containing the book data in the body.
 * @param {Response} res - The Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} A JSON response containing the newly created book.
 */
exports.createBook = async (req, res, next) => { 
    try { 
        const book = new Book(req.body); 
        await book.save(); 
        res.status(201).json(book);
    } catch (error) { 
        next(error);
    }
} ; 

/**
 * Update an existing book by ID.
 * @async
 * @function updateBook
 * @param {Request} req - The Express request object containing the book ID in the params and updated data in the body.
 * @param {Response} res - The Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} A JSON response containing the updated book or a 404 error if not found.
 */
exports.updateBook = async (req, res, next) => { 
    try { 
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true}); 
        if (!book) { 
            return res.status(404).json({error: 'Book not found'});
        } 
        res.json(book); 
    } catch (error) { 
        next(error);
    }
};

/**
 * Delete a book by ID.
 * @async
 * @function deleteBook
 * @param {Request} req - The Express request object containing the book ID in the params.
 * @param {Response} res - The Express response object.
 * @param {Function} next - The next middleware function.
 * @returns {Promise<void>} A JSON response confirming deletion or a 404 error if not found.
 */
exports.deleteBook = async (req, res, next) => { 
    try { 
        const book = await Book.findByIdAndDelete(req.params.id); 
        if (!book) { 
            return res.status(404).json({error: 'Book not found' }); 
        } 
        res.json({ message: 'Book deleted successfully'});
        } catch (error) { 
            next(error);
        }
    };
