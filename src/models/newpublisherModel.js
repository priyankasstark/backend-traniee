const mongoose = require('mongoose');
// const ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    // _id: ObjectId,
    name: String,
    headQuarter: String,

}, { timestamps: true });


module.exports = mongoose.model('Newpublisher', bookSchema)

