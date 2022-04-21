const express = require('express');
var bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const route = require('./routes/route.js');
const moment = require('moment');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://AbiM-DB:BGucCQmqenRiwUXT@cluster0.w5bka.mongodb.net/Token-Authentication", 
{useNewUrlParser: true})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );

app.use(
    function (req,res,next){
        console.log(moment().format('YYYY-MM-DD HH:mm:ss'),',',req.ip,',',req.path);
        next();
    }
);

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
