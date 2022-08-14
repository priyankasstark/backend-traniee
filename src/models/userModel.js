const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName : String,
    authorName : String,
    category : {
        type : String,
        enum : ["horror","comic","true story"]
    },
    year : Number
}, { timestamps: true });

module.exports = mongoose.model('book', bookSchema) //

// Boolean, Object/json, array
// Boolean, Object/json, array
