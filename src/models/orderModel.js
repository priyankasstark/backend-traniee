const mongoose = require('mongoose');
const moment = require('moment');

const orderSchema = mongoose.Schema(
    {
        userId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'users'
        },
        productId : {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'products'
        },
        amount : Number,
        isFreeAppUser : Boolean,
        date : {
            type : String,
            default : moment().format('DD/MM/YYYY')
        }
    },
    {timestamps : true}
);

module.exports = mongoose.model('orders',orderSchema);