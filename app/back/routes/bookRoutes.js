const express = require('express');
const bookControllers = require('../controllers/bookControllers');

const router = express.Router();

router.post('/', bookControllers.createBooks);
router.get('/', bookControllers.getAllBooks); 
router.get('/favorites', bookControllers.getFavoriteBooks);
router.get('/:id', bookControllers.getBookById);
router.put('/:id', bookControllers.updateBook);
router.delete('/:id', bookControllers.deleteBook);


module.exports = router;