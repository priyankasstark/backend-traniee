const UserModel = require('../models/userModel');
const jwt = require('jsonwebtoken');

const newUser = async function(req,res)
{
    try
    {
        let data=req.body;
        if(Object.keys(data).length!=0)
        {
            let newData=await UserModel.create(data);
            res.status(201).send({status : true,msg : newData});
        }
        else
        {
            res.status(400).send({status : false,msg : "Bad Request!"});
            
        }
    }
    catch(err)
    {
        res.status(500).send({status : false,msg : err});
    }
};

const loginUser = async function(req,res)
{
    try
    {   
        let data=req.body;
        let user=await UserModel.findOne({emailId : data.emailId,password : data.password});
        if(user!=null)
        {
            let token=await jwt.sign({_id : user._id,emailId : user.emailId},'SecretKey');
            res.status(201).send({status : true,msg : token});
        }
        else
        {
             res.send({status : false,msg : 'Email ID or Password is Incorrect!'});   
        }
    }
    catch(err)
    {
        res.status(500).send({status : false,msg : err});
    }
};

const getUserDetails = async function(req,res)
{
    try
    {   
        let id=req.params.userId;
        let user=await UserModel.findOne({_id : id,isDeleted : false});
        if(user==null)
        {
            res.status(204).send({status : false,msg : 'User does not exist!'});
        
        }    
        else
        {
            res.status(200).send({status : true,msg : user});
        }
    }
    catch(err)
    {
        res.status(500).send({status : false,msg : err});
    }
};


const updateUserDetails = async function(req,res)
{
    try
    {   
        let id=req.params.userId;
        let data=req.body;
        let user=await UserModel.findOneAndUpdate({_id : id,isDeleted : false},data,{new : true});
        if(user==null)
        {
            res.status(204).send({status : false,msg : 'User does not exist!'});
        }
        else
        {
            res.status(200).send({status : true,msg : user});
        }
    }
    catch(err)
    {
        res.status(500).send({status : false,msg : err});
    }
};

const deleteUser = async function(req,res)
{
    try
    {   
        let id=req.params.userId;
        let user=await UserModel.findOneAndUpdate({_id : id,isDeleted : false},{isDeleted : true});
        if(user==null)
        {
            res.status(204).send({status : false,msg : 'User does not exist!'});
        }    
        else
        {
            res.status(200).send({status : true,msg : 'User has been deleted successfully!'});
        }
    }
    catch(err)
    {
        res.status(500).send({status : false,msg : err});
    }
}

module.exports={newUser,loginUser,getUserDetails,updateUserDetails,deleteUser};