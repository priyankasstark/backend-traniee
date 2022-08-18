const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema( {
    book_Name: String,
    author_id : {
        type:Number,
        required: true
    },
    price : Number,
    rating : Number
},
{timestamps:true})


module.exports = mongoose.model('bookLib', bookSchema)
