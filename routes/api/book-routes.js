const router = require('express').Router();

const { getSavedBook, saveBook, removeBook } = require ('../../controllers/bookController')

//GET and Post at /api/books

router
 .route('/')
 .get(getSavedBook)
 .post(saveBook);

 //DELETE  at /api/books/:id

 router.route('/:id').delete(removeBook);
 module.exports = router;