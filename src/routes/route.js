const express = require('express');
const controller=require('../controllers/controller');

const router = express.Router();

router.get('/getSessionsByDistrict',controller.getSessionsByDistrict);

module.exports = router;

router.get('/test',function (req, res) 
{
    res.send('axios-1 Assignment')
});