const BookModel = require("../models/bookModel");

const newBook = async function(req,res){
    let data=req.body;
    let saveData=await BookModel.create(data);
    res.send({msg : saveData});
}

const listBooks = async function(req,res){
    let allBooks=await BookModel.find();
    res.send({msg : allBooks});
}

module.exports.newBook=newBook;
module.exports.listBooks=listBooks;