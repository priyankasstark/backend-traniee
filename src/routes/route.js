const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('New Author-Book Data API')
});

router.post('/newBook',controller.newBook);

router.post('/newAuthor',controller.newAuthor);

router.get('/listBookByAuthor',controller.listBookByAuthor);

router.post('/updateBookPrice',controller.updateBookPrice);

router.get('/getBookByCost',controller.getBookByCost);

module.exports = router;