const BookModel = require('../models/bookModel');
const AuthorModel = require('../models/authorModel');
const PublisherModel = require('../models/publisherModel');


const newBook = async function(req,res)
{
    let data=req.body;
    if(data.author)
    {
        let authorDet=await AuthorModel.findOne({_id : data.author});
        if(authorDet==null)
        {
            res.send('Please enter a valid Author Id!');
        }
        else if(data.publisher)
        {
            let publisherDet=await PublisherModel.findOne({_id : data.publisher});
            if(publisherDet==null)
            {
                res.send('Please enter a valid Publisher Id!');
            }
            else
            {
                let newData=await BookModel.create(data);
                res.send({msg : newData});
            }
        }
        else
        {
            res.send('Please Enter Publisher!');
        }
    }
    else
    {
        res.send('Please Enter Author!');
    }
}

const newAuthor = async function(req,res)
{
    let data=req.body;
    let newData=await AuthorModel.create(data);
    res.send({msg : newData});
}

const newPublisher = async function(req,res)
{
    let data=req.body;
    let newData=await PublisherModel.create(data);
    res.send({msg : newData});
}

const getBookDetails = async function(req,res)
{
    let result=await BookModel.find({},{_id:0,__v:0,createdAt:0,updatedAt:0}).populate(["author","publisher"]);
    res.send({msg : result});
}

const books = async function(req,res)
{
    let books=await BookModel.updateMany(
        {publisher : {$in : ["625a811022ce6481baaa4684","625a81f322ce6481baaa468a"]}},
        {$set : {isHardCover : true}}    
        );
    let authors=await AuthorModel.find({rating : {$gt : 3.5}},{_id : 1});
    let result=[];
    for(let i=0;i<authors.length;++i)
    {
        result[i]=await BookModel.updateMany(
            {author : authors[i]._id},
            {$inc : {price : 10}}
        );
    }
    res.send({msg : result});
}

module.exports = {newBook,newAuthor,newPublisher,getBookDetails,books};