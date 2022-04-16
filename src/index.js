const express = require('express');
var bodyParser = require('body-parser');
const { default: mongoose } = require('mongoose');
const route = require('./routes/route.js');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://AbiM-DB:BGucCQmqenRiwUXT@cluster0.w5bka.mongodb.net/AbiM-DB", 
{useNewUrlParser: true})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) );

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
