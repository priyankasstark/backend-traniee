const BookModel = require("../models/bookModel");

const createBook = async function(req,res){
    let data=req.body;
    let saveData=await BookModel.create(data);
    res.send({msg : saveData});
}

const bookList = async function(req,res){
    let allBooks=await BookModel.find().select({bookName : 1,authorName : 1,_id : 0});
    res.send({count : allBooks.length,msg : allBooks});
}

const getBooksInYear = async function(req,res){
    let b_year=req.query.year;
    let allBooksInYear=await BookModel.find({year : b_year}).select({_id:0,__v:0,createdAt:0,updatedAt:0});
    res.send({msg : allBooksInYear});
}

const getParticularBooks = async function(req,res){
    let key=req.body;
    let books=await BookModel.find(key).select({_id:0,__v:0,createdAt:0,updatedAt:0});
    res.send({count : books.length,msg : books});
}

const getXINRBooks = async function(req,res){
    let books=await BookModel.find({'price.inrPrice' : {$in : [100,200,500]}},{_id:0,__v:0,createdAt:0,updatedAt:0});
    res.send({count : books.length,msg : books});
}

const getRandomBooks = async function(req,res){
    let books=await BookModel.find({$or : [{stockAvailable : true},{totalPages : {$gt : 500}}]}).select({_id:0,__v:0,createdAt:0,updatedAt:0});
    res.send({count : books.length,msg : books});
}

module.exports.createBook=createBook;
module.exports.bookList=bookList;
module.exports.getBooksInYear=getBooksInYear;
module.exports.getParticularBooks=getParticularBooks;
module.exports.getXINRBooks=getXINRBooks;
module.exports.getRandomBooks=getRandomBooks;
