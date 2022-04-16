const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('New Author-Book Data API')
});

router.post('/newBookP',controller.newBook);

router.post('/newAuthorP',controller.newAuthor);

router.post('/newPublisher',controller.newPublisher);

router.get('/getBookDetailsP',controller.getBookDetails);

router.put('/books',controller.books);

module.exports = router;