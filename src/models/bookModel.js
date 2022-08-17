const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type:String,
        require:true
    }, 
    authorName: String, 
    
    prices: {
        indianPrice: String,
        europePrice: String,
     
    }, 
    author_id:{
        type:String,
        required :true
    },  
    
    prices:Number,
    ratings:Number
       
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema)


