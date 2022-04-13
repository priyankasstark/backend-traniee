const BookModel = require("../models/bookModel");
const AuthorModel = require('../models/authorModel');


const newBook = async function(req,res){
    let data=req.body;
    let newData=await BookModel.create(data);
    res.send({msg : newData});
}

const newAuthor = async function(req,res){
    let data=req.body;
    let newData=await AuthorModel.create(data);
    res.send({msg : newData});
}

const listBookByAuthor = async function(req,res){
    let data=req.body;
    let id=await AuthorModel.findOne({authorName : data.authorName},{authorID : 1,_id : 0});
    let result=await BookModel.find(id,{_id:0,__v:0,createdAt:0,updatedAt:0});
    res.send({authorName : data.authorName,count : result.length,msg : result});
}

const updateBookPrice = async function(req,res){
    let data=req.body;
    let book=await BookModel.findOneAndUpdate(
        {bookName : data.bookName},
        {$set : {price : data.price}},
        {new : true}
    );
    let author=await AuthorModel.findOne({authorID : book.authorID},{authorName : 1,_id : 0})
    res.send({authorName : author.authorName,updatedPrice : book.price});
}

const getBookByCost = async function(req,res){
    let books=await BookModel.find({price : {$gte : 50,$lte : 100}}).select({authorID : 1});
    let authName=[];
    for(let i=0,j=0;i<books.length;++i)
    {
        let auth=await AuthorModel.findOne({authorID : books[i].authorID});
        if(books[i].authorID==auth.authorID)
        {
            authName[j]=auth.authorName;
            ++j;
        }
    }
    res.send({count : authName.length,msg : authName});
}

module.exports.newBook=newBook;
module.exports.newAuthor=newAuthor;
module.exports.listBookByAuthor=listBookByAuthor;
module.exports.updateBookPrice=updateBookPrice;
module.exports.getBookByCost=getBookByCost;