const { count } = require("console")
const bookModel = require("../models/bookModel")
const BookModel = require("../models/bookModel")



const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const booksData= async function (req, res) {
    let allBooks =await bookModel.find().select({bookName:1, authorName : 1,})
    res.send({msg :allBooks}) }

    const getBooksInYear = async function(req , res){
        let year = req.body.year
        let allBooks1 = await bookModel.find({year: year})
        res.send({msg :allBooks1})
    }

    const getparticularBOoks = async function(req , res){
        let particularBooks = await bookModel.find(req.body)
        res.send({msg : particularBooks})
    }
     
    const getXINRBooks = async function( req , res){
        let indianBooks = await bookModel.find({$in : ["100" , "200" , "500"]})
   
      res.send({msg : indianBooks})
    }

    const getRandomBooks = async function(req , res){
        let randomBooks = await bookModel.find({$or : [{stockAvailable : true }, { totalpages :{$gt : 500 }}]})
        res.send({msg : randomBooks})
    }


module.exports.createBook= createBook
module.exports.booksData= booksData