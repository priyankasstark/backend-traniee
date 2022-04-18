const DeveloperModel = require('../models/developerModel');
const BatchModel = require('../models/batchModel');

const newBatch = async function(req,res)
{
    let data=req.body;
    let newData=await BatchModel.create(data);
    res.send({msg : newData});
}

const newDeveloper = async function(req,res)
{
    let data=req.body;
    let newData=await DeveloperModel.create(data);
    res.send({msg : newData});
}

const eligibleDev = async function(req,res)
{
    let devs=await DeveloperModel.find({percentage : {$gte : 70}, gender : 'female'}).populate('batch');
    res.send({msg : devs});
}

const getDevs = async function(req,res)
{
    let batchId=await BatchModel.findOne({name : req.query.program},{_id : 1});
    let devs=await DeveloperModel.find({percentage : {$gte : req.query.percentage}, batch : batchId._id}).populate('batch');
    res.send({msg : devs});
} 

module.exports = {newBatch,newDeveloper,eligibleDev,getDevs};