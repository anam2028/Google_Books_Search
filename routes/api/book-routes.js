const router = require('express').Router();

const { getSavedBooks, saveBook, removeBook } = require ('../../controllers/bookController')

//GET and Post at /api/books

router
 .route('/')
 .get(getSavedBooks)
 .post(saveBook);

 //DELETE  at /api/books/:id

 router.route('/:id').delete(removeBook);
 module.exports = router;