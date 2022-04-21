const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const newUser = async function(req,res)
{
    let data=req.body;
    let newData=await UserModel.create(data);
    res.send({status : true,msg : newData});
};

const loginUser = async function(req,res)
{
    let data=req.body;
    let user=await UserModel.findOne({emailId : data.emailId,password : data.password});
    if(user!=null)
    {
        let token=await jwt.sign({_id : user._id,emailId : user.emailId},'SecretKey');
        res.send({status : true,msg : token});
    }
    else
    {
         res.send({status : false,msg : 'Email ID or Password is Incorrect!'});   
    }
};

const getUserDetails = async function(req,res)
{
    let id=req.params.userId;
    let user=await UserModel.findOne({_id : id,isDeleted : false});
    if(user==null)
    {
        res.send({status : false,msg : 'User does not exist!'});
    
    }    
    else
    {
        res.send({status : true,msg : user});
    }
};

const updateUserDetails = async function(req,res)
{
    let id=req.params.userId;
    let data=req.body;
    let user=await UserModel.findOneAndUpdate({_id : id,isDeleted : false},data,{new : true});
    if(user==null)
    {
        res.send({status : false,msg : 'User does not exist!'});
    }
    else
    {
        res.send({status : true,msg : user});
    }
};

const deleteUser = async function(req,res)
{
    let id=req.params.userId;
    let user=await UserModel.findOneAndUpdate({_id : id,isDeleted : false},{isDeleted : true});
    if(user==null)
    {
        res.send({status : false,msg : 'User does not exist!'});
    
    }    
    else
    {
        res.send({status : true,msg : 'User has been deleted successfully!'});
    }
}

module.exports={newUser,loginUser,getUserDetails,updateUserDetails,deleteUser};