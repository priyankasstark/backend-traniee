const express = require('express');
const BookModel = require('../models/bookModel');
const BookController = require('../controllers/bookController');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('Book Data API')
});

router.post('/newBook',BookController.newBook);

router.get('/listbook',BookController.listBooks);

module.exports = router;