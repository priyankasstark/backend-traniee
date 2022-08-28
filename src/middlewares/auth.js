const jwt = require('jsonwebtoken');

const tokenAuthenticator = function(req,res,next){
    let reqHeaders=req.headers;
    if(reqHeaders["x-auth-token"])
    {
        let token=reqHeaders["x-auth-token"];
        let decodedToken=jwt.verify(token,'SecretKey');
        if(req.params.userId==decodedToken._id)
        {
            next();
        }
        else
        {
            res.send({status : false,msg : 'Invalid Token!'});
        }
    }
    else
    {
        res.send({status : false,msg : "Request is missing a mandatory HEADER!"});
    }
};

module.exports={tokenAuthenticator};