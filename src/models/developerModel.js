const mongoose = require('mongoose');

const developerSchema = new mongoose.Schema(
    {
        name : String,      
        gender : {
            type : String,
            enum : ['male','female']
        },
        percentage : Number,
        batch : {
                        type : mongoose.Schema.Types.ObjectId,
                        ref : 'batches'
                    },  
    },
    {timestamps : true}
);

module.exports = mongoose.model('developers',developerSchema);