const jwt = require('jsonwebtoken');

const Authenticate = function(req,res,next){
    try{
    let reqHeaders=req.headers;
    if(reqHeaders["x-auth-token"])
            next();
    else
    {
        res.send({status : false,msg : "Request is missing a mandatory HEADER!"});
    }
}
catch(err){
    res.status(500).send({status : false,msg : err});
}}



const authorise = function(req, res, next) {
    try{
    // comapre the logged in user's id and the id in request
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    let decodedToken = jwt.verify(token, "SecretKey");
    if (decodedToken.userId!=req.params.userId){
     
    next()
    }else{
        return res.send({status:false,msg:"You are not authorizre to do this task"})
    } } 
    catch(err){
        res.status(500).send({status : false,msg : err});
    }}

module.exports={Authenticate,authorise};