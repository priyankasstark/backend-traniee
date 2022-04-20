const req = require("express/lib/request");

const headerValidator = function(req,res,next){
    let headers=req.headers;
    if(headers["isfreeappuser"])
    {
        next();
    }
    else
    {
        res.send("Request is missing a mandatory HEADER!");
    }
};

const updatedValidator = function(req,res,next){
    req.headers['isfreeappuser']=true;
    next();
}

module.exports={headerValidator,updatedValidator};