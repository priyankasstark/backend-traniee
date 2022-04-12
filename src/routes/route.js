const express = require('express');
const BookModel = require('../models/bookModel');
const BookController = require('../controllers/bookController');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('Book Data API')
});

router.post('/createBook',BookController.createBook);

router.get('/bookList',BookController.bookList);

router.get('/getBooksInYear',BookController.getBooksInYear);

router.get('/getParticularBooks',BookController.getParticularBooks);

router.get('/getXINRBooks',BookController.getXINRBooks);

router.get('/getRandomBooks',BookController.getRandomBooks);


module.exports = router;