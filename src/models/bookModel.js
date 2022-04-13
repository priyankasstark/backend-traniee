const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        bookName : String,
        authorID :  {
                        type : Number,
                        required : true
                    },      
        price : Number,
        ratings : Number 
    },
    {timestamps : true}
);

module.exports = mongoose.model('nbooks',bookSchema);