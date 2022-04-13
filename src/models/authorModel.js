const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema (
    {
        authorID :  {
                        type : Number,
                        required : true
                    },
        authorName : String,
        age : Number,
        address : String
    },
    {timestamps : true}
);

module.exports = mongoose.model('nauthors',authorSchema);