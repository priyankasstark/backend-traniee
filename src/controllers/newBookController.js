const { default: mongoose } = require("mongoose");
const authorModel = require("../models/newauthorModel")
const bookModel= require("../models/newbookModel")
const publisherModel= require("../models/newpublisherModel")


const createBook= async function (req, res) {
    let book = req.body
    let authorId = req.body.author_id
    let publisherId = req.body.publisher_id
   
    if(!authorId){
        return res.send({ msg : "author id is required"})
    }

    let author_id = await authorModel.findById(authorId)
    if(!author_id){
        return res.send({ msg :'No author is present with the given id'})
    }   
    if(!publisherId){
        return res.send({ msg :'publisher id is required'})
    }

    let publisher_id = await publisherModel.findById(publisherId)
    if(!publisher_id){
        return res.send({msg :'No publisher is present with the given id'})
    }
   
    let bookCreated = await bookModel.create(book)
    return res.send({data: bookCreated  })
};

//4
const fetchData = async function( req, res){
    let fetchedData = await bookModel.find().populate( ["author_id" , "publisher_id"])
    res.send( fetchedData)
}


//5a
const updating = async function( req, res){
    let data = await bookModel.updateMany( {$or :[{"publisher_id" :"63010cb76cb755154bc7face"}, {"publisher_id" :"63010d2b6cb755154bc7fad4"}]}, { HardCover : true} )
  res.send( { msg : data})
}


//5b 
const priceUpdate = async function( req, res) {
  let add = await bookModel.updateMany({"ratings" :{$gt : 3.5}}, {$inc :{$set:{ "price" : +10} }},{new : true})
  res.send( add )
}

         module.exports.createBook = createBook
         module.exports.fetchData = fetchData
         module.exports.updating = updating
         module.exports.priceUpdate = priceUpdate
