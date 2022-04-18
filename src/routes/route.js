const express = require('express');
const controller = require('../controllers/controller');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('Batch-Dev Data API')
});

router.post('/batches',controller.newBatch);

router.post('/developers',controller.newDeveloper);

router.get('/scholarship-developers',controller.eligibleDev);

router.get('/developers',controller.getDevs);

module.exports = router;