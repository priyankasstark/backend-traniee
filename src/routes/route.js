const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) 
{
    res.send('Batch-Dev Data API')
});


router.get('/test', function (req, res) 
{
    res.send('Batch-Dev Data API 2')
});


module.exports = router;


