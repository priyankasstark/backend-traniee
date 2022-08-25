const express = require('express');
const controller=require('../controllers/controller');
const middleWare=require('../middlewares/allMiddleWares');

const router = express.Router();

router.post('/newUser',middleWare.updatedValidator,controller.newUser);

router.post('/newProduct',controller.newProduct);

router.post('/newOrder',middleWare.headerValidator,controller.newOrder);

module.exports = router;

router.get('/test',function (req, res) 
{
    res.send('User-Product-Order API')
});


