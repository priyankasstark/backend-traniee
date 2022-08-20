const mongoose = require('mongoose');
 const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    // _id: ObjectId,
	name:String,
    author_id: {
        type: ObjectId,
        ref: "Author"
    },
	price:Number,
    ratings:Number,
    publisher_id: {
            type : ObjectId,
            ref : "Newpublisher"
        },

        HardCover:{
            type : Boolean,
            default : false
        }
}, { timestamps: true });


module.exports = mongoose.model('LibraryBook', bookSchema)
