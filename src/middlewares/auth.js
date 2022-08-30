const jwt = require('jsonwebtoken')
const userModel = require("../models/userModel")
const mongoose = require('mongoose')



const authenticate = async function(req, res) {

  let userName = req.body.emailId;
  let user = await userModel.findOne({emailId : userName})
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Plutonium",
      organisation: "Function-up",
    },
    "functionup-Plutonium-key"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};
    
// authorise ******************************************************************************************************88
const authorise = function(req, res, next ) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-Plutonium-key",(err , decode) => {
    if(err){
      return res.send("you have entered incorrect token or. incorrect length of token")
    } (decode == true)
        next()
    
  });
}

const authorise2 = function(req, res, next) {
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  if (!token) return res.send({ status: false, msg: "token must be present" });

  let decodedToken = jwt.verify(token, "functionup-Plutonium-key")
let userLoggedIn = decodedToken.userId
let userToBeModified = req.params.userId
  
  let isValid = mongoose.Types.ObjectId.isValid(userToBeModified)
  
 if (isValid === false){
    return  res.send("length of the id is less then 24 digit")
   }
  else if (!decodedToken){
    return res.send({ status: false, msg: "token is invalid" });
  } 
  else  if(userToBeModified != userLoggedIn) {
  return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})
  }else {
    next()
}  
}

module.exports.authenticate =authenticate
module.exports.authorise =authorise
module.exports.authorise2 = authorise2