const { count } = require("console")
const bookModel= require("../models/bookModel")
const authorModel= require("../models/authorModel")

const createBook= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}

const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await authorModel.create(data)
    console.log(savedData)
    res.send({msg: savedData})
}
const allBooks = async function(req, res) {
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"}).select({author_id:1,_id:0})
    console.log(authorDetails)
    const booksName = await bookModel.find(authorDetails[0]).select({book_Name:1,_id:0})
    res.send( {msg:booksName})
}
const upadatedBookPrice = async function (req, res) {
    const bookDetails = await bookModel.findOne({bookName:"two states"})
    const id = bookDetails.author_id
    console.log(id)
    const authorN = await authorModel.find({author_id:id}).select({author_name:1, _id:0})
    const bkName = bookDetails.book_Name
    console.log(bkName)
    const updatedPrice = await bookModel.findOneAndUpdate({book_Name:bkName}, {price:100},{new:true}).select({price:1, _id:0})
    res.send({msg:authorN, updatedPrice}
    )}   
const authorsName =async function (req, res) {
    const range = await bookModel.find( { price : { $gte:50 , $lte : 100}}).select({author_id :1, _id :0})
    let newarr =[]
    for( i = 0 ; i < range.length ; i ++){
        const authorid = range[i].author_id
        console.log(authorid)
        newarr = await authorModel.findOne({ author_id : authorid}).select({author_name : 1, _id : 0})
        
    }
    res.send( {data : newarr})
}


module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.allBooks = allBooks
module.exports.upadatedBookPrice = upadatedBookPrice
module.exports.authorsName = authorsName
