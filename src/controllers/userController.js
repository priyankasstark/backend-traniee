const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");
//crate user ***************************************************************************************************
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

//login user ***************************************************************************************************
const loginUser = async function (req, res , next) {
  let userName = req.body.emailId;
  let password = req.body.password;
  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user){ 
    return res.send({status: false,msg: "username or the password is not corerct",});
  }else if(user.isDeleted === true){
    res.send("this account is deleted you can't log in, please create new account ")
  }else{
    next ()
  }
}
 
 
// getuserData ******************************************************************************************
const getUserData = async function (req, res) {
  
  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails){
  return res.send({ status: false, msg: "No such user exists" });
  } else if (userDetails.isDeleted==true){
    res.send("this user is deleted from our databse you can't find")
  }else{
  res.send({ status: true, data: userDetails });
  }
};

// post message ************************************************************************************
const postMessage = async function (req, res) {
    let message = req.body.message
    let user = await userModel.findById(req.params.userId)
    if(!user){
       return res.send({status: false, msg: 'No such user exists'})
    }else if(user.isDeleted==true){
      res.send("this user is deleted from our database you can't post a message")
    }else{
       let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
    //return the updated user document
    return res.send({status: true, data: updatedUser})
}
}

// updateUser ************************************************************************************************************
const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }else if(user.isDeleted == true){
    res.send("you can't update this user , this user is deleted from our database")
  } else{

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData,{new : true});
  res.send({ status: true, data: updatedUser });
}
};

//deleteUser***************************************************************************************
const deleteUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  } else if(user.isDeleted == true){
    res.send("this account  is already deleted, please create new account to delte ")
  }else{
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId },{ isDeleted : true},{new : true});
  res.send({ status: true, dl : "user deleted successfully", data: updatedUser });
}
};










module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.postMessage = postMessage
module.exports.deleteUser = deleteUser