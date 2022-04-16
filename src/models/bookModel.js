const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema(
    {
        name : String,
        author : {
                    type : mongoose.Schema.Types.ObjectId,
                    ref : 'pauthors'
                 },      
        price : Number,
        ratings : Number,
        publisher : {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : 'publishers'
                    },
        isHardCover : {
                        type : Boolean,
                        default : false
                      }  
    },
    {timestamps : true}
);

module.exports = mongoose.model('pbooks',bookSchema);